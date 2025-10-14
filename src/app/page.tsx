import { Hero } from "@/components/Hero";
import { CardGrid } from "@/components/CardGrid";

const news = [
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
    },
];
const talks = [
    { title: "Keynote at Imaging Summit 2025", href: "/talks/2025/keynote" },
];

export default function Home() {
    return (
        <>
            <Hero />
            <CardGrid title="News" items={news} />
            <CardGrid title="Publications" items={pubs} />
            <CardGrid title="Talks" items={talks} />
        </>
    );
}
