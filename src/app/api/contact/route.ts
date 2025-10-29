import { NextResponse } from "next/server";

type RecaptchaResp = {
    success: boolean;
    score?: number;
    action?: string;
    // 他に challenge_ts, hostname など
};

export async function POST(req: Request) {
    const { name, email, message, token, action } = await req.json();

    // 1) reCAPTCHA 検証
    const params = new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY!,
        response: token,
    });
    const r = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: params,
        // reCAPTCHAの応答は2分以内・1回のみ検証可
    });
    const result = (await r.json()) as RecaptchaResp;

    // 2) しきい値＆action一致を確認（v3）
    if (
        !result.success ||
        result.action !== action ||
        (result.score ?? 0) < 0.5
    ) {
        return NextResponse.json({ ok: false }, { status: 400 });
    }

    // 3) ここで実メール送信（Resend/API 等）や保存せず転送のみ
    // await sendMail({ name, email, message });

    return NextResponse.json({ ok: true });
}
