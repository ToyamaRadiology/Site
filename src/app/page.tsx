import { Hero } from "@/components/Hero";
import { CardGrid } from "@/components/CardGrid";

const news = [
    {
        title: "学会参加レポート (JSR 2025)",
        href: "/news/2025/jsr-report",
        meta: "2025-10-01",
    },

    {
        title: "学会参加レポート (JSR 2025)",
        href: "/news/2025/jsr-report",
        meta: "2025-10-01",
    },

    {
        title: "学会参加レポート (JSR 2025)",
        href: "/news/2025/jsr-report",
        meta: "2025-10-01",
    },
];
const pubs = [
    {
        title: "Deep Learning in Abdominal CT (Radiology, 2024)",
        href: "/publications/2024/dl-ct",
        meta: "2025-10-01",
    },

    {
        title: "Deep Learning in Abdominal CT (Radiology, 2024)",
        href: "/publications/2024/dl-ct",
        meta: "2025-10-01",
    },

    {
        title: "Deep Learning in Abdominal CT (Radiology, 2024)",
        href: "/publications/2024/dl-ct",
        meta: "2025-10-01",
    },
];

export default function Home() {
    return (
        <>
            <Hero />
            {/* News section (full‑bleed, soft blue→white) */}
            <section className="section-bleed section-gradient-blue">
                <div className="px-4 md:px-6 lg:px-8">
                    <div className="mx-auto max-w-screen-xl py-10 md:py-16">
                        <CardGrid title="News" items={news} />
                    </div>
                </div>
            </section>

            {/* Publications section (full‑bleed, same gradient) */}
            <section className="section-bleed section-gradient-blue">
                <div className="px-4 md:px-6 lg:px-8">
                    <div className="mx-auto max-w-screen-xl py-10 md:py-16">
                        <CardGrid title="Publications" items={pubs} />
                    </div>
                </div>
            </section>
        </>
    );
}
