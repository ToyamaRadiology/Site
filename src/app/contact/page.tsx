"use client";
import Script from "next/script";
import { useState } from "react";

// grecaptcha typing (minimal)
declare global {
    interface Window {
        grecaptcha: {
            ready: (cb: () => void) => void;
            execute: (
                siteKey: string,
                options: { action: string }
            ) => Promise<string>;
        };
    }
}

// payload typing
type ContactPayload = {
    name: string;
    email: string;
    category?: string;
    message: string;
    agree: boolean;
};

export default function ContactPage() {
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
    const [statusMsg, setStatusMsg] = useState<string>("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        setStatus("idle");
        setStatusMsg("");

        try {
            const siteKey = process.env
                .NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

            // reCAPTCHA v3 token
            const token = await new Promise<string>((resolve, reject) => {
                const exec = () =>
                    window.grecaptcha
                        .execute(siteKey, { action: "contact" })
                        .then(resolve)
                        .catch(reject);

                try {
                    if (typeof window.grecaptcha?.ready === "function") {
                        window.grecaptcha.ready(exec);
                    } else if (
                        typeof window.grecaptcha?.execute === "function"
                    ) {
                        exec();
                    } else {
                        reject(new Error("reCAPTCHA not loaded"));
                    }
                } catch (err) {
                    reject(err as Error);
                }
            });

            // collect
            const form = new FormData(e.currentTarget);
            const data: ContactPayload = {
                name: String(form.get("name") ?? ""),
                email: String(form.get("email") ?? ""),
                category: form.has("category")
                    ? String(form.get("category"))
                    : undefined,
                message: String(form.get("message") ?? ""),
                agree: form.has("agree"),
            };

            // submit
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ ...data, token, action: "contact" }),
            });

            if (res.ok) {
                setStatus("ok");
                setStatusMsg("送信しました。ご連絡ありがとうございます。");
                (e.currentTarget as HTMLFormElement).reset();
            } else {
                const t = await res.text().catch(() => "");
                setStatus("error");
                setStatusMsg(
                    t || "送信に失敗しました。時間をおいて再度お試しください。"
                );
            }
        } catch (err) {
            setStatus("error");
            setStatusMsg((err as Error).message || "エラーが発生しました。");
        } finally {
            setSending(false);
        }
    };

    return (
        <>
            {/* reCAPTCHA v3 script */}
            <Script
                src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                strategy="afterInteractive"
            />

            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    Contact
                </h1>

                <form
                    onSubmit={onSubmit}
                    className="mt-6 grid gap-5"
                    noValidate
                >
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium"
                        >
                            お名前
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            disabled={sending}
                            className="mt-1 w-full rounded border px-3 py-2"
                            placeholder="例）外山 由貴"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium"
                        >
                            メール
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            inputMode="email"
                            disabled={sending}
                            className="mt-1 w-full rounded border px-3 py-2"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium"
                        >
                            内容
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            minLength={10}
                            disabled={sending}
                            className="mt-1 w-full rounded border px-3 py-2"
                        />
                    </div>

                    {/* Consent */}
                    <label className="flex items-start gap-2 text-sm">
                        <input
                            id="agree"
                            name="agree"
                            type="checkbox"
                            required
                            disabled={sending}
                        />
                        <span>
                            患者個人情報・診療相談は送信しないでください。
                        </span>
                    </label>

                    {/* Status */}
                    <div aria-live="polite" className="text-sm min-h-[1.5rem]">
                        {status === "ok" && (
                            <span className="text-emerald-600">
                                {statusMsg}
                            </span>
                        )}
                        {status === "error" && (
                            <span className="text-red-600">{statusMsg}</span>
                        )}
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={sending}
                            className="btn"
                        >
                            {sending ? "送信中…" : "Send"}
                        </button>
                    </div>
                </form>

                <p className="mt-6 text-xs opacity-70">
                    本サイトはreCAPTCHA(v3)を利用しています。Googleの
                    <a
                        className="underline"
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noreferrer"
                    >
                        プライバシーポリシー
                    </a>
                    と
                    <a
                        className="underline"
                        href="https://policies.google.com/terms"
                        target="_blank"
                        rel="noreferrer"
                    >
                        利用規約
                    </a>
                    が適用されます。
                </p>
            </div>
        </>
    );
}
