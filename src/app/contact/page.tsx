import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Contact
            </h1>

            <p className="mt-4 opacity-90">
                講演・執筆・共同研究に関するご連絡のみ受け付けています。
                本サイトは一般的情報の提供を目的とし、個別の医療相談には回答できません。
            </p>

            {/* デモ用の最小フォーム（まだ送信先は未設定） */}
            <form className="mt-6 grid gap-4 max-w-xl" action="#" method="post">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                        お名前
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="mt-1 w-full rounded border px-3 py-2"
                    />
                </div>

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
                        className="mt-1 w-full rounded border px-3 py-2"
                    />
                </div>

                <div>
                    <label
                        htmlFor="category"
                        className="block text-sm font-medium"
                    >
                        お問い合わせ種別
                    </label>
                    <select
                        id="category"
                        name="category"
                        className="mt-1 w-full rounded border px-3 py-2"
                    >
                        <option>講演依頼</option>
                        <option>執筆・取材</option>
                        <option>共同研究</option>
                        <option>その他（業務連絡）</option>
                    </select>
                </div>

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
                        rows={5}
                        required
                        className="mt-1 w-full rounded border px-3 py-2"
                    />
                </div>

                <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" required />
                    <span>
                        患者個人情報・診療相談は送信しません。送信内容は業務連絡のみに用います。
                    </span>
                </label>

                <div className="pt-2">
                    <button type="submit" className="btn">
                        Send
                    </button>
                </div>
            </form>

            <p className="mt-6 text-sm opacity-70">
                ※
                デモ段階のためフォームは送信先未設定です。実運用ではreCAPTCHA付きの安全な送信先（サーバーレス関数）に切り替えます。
            </p>
        </div>
    );
}
