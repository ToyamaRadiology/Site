import type { Metadata } from "next";

export const metadata: Metadata = { title: "News" };

type News = {
    title: string;
    date: string; // YYYY-MM-DD
    excerpt?: string;
    url?: string;
};

const newsItems: News[] = [
    {
        title: "JSR 2025に参加しました",
        date: "2025-10-01",
        excerpt: "腹部画像診断セッションの所感を短くまとめました。",
        url: "#",
    },
    {
        title: "寄稿のお知らせ（Monthly Radiology）",
        date: "2025-08-20",
        excerpt: "教育コラムを1本寄稿しました。",
        url: "#",
    },
    {
        title: "研究プロジェクト開始（画像×解剖）",
        date: "2025-06-10",
        excerpt: "共同研究メンバーを募集しています。",
        url: "#",
    },
];

export default function NewsPage() {
    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                News
            </h1>

            <ul className="mt-6 space-y-4">
                {newsItems.map((n, i) => (
                    <li key={i} className="card">
                        <div className="text-sm opacity-70">{n.date}</div>
                        <div className="mt-1 font-medium">
                            {n.url ? (
                                <a href={n.url} className="hover:underline">
                                    {n.title}
                                </a>
                            ) : (
                                n.title
                            )}
                        </div>
                        {n.excerpt && (
                            <p className="mt-1 text-sm opacity-90">
                                {n.excerpt}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
