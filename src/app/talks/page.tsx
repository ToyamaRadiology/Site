import type { Metadata } from "next";

export const metadata: Metadata = { title: "Talks & Media" };

type Talk = {
    title: string;
    event: string;
    date: string; // YYYY-MM-DD
    location?: string;
    url?: string;
};

const upcoming: Talk[] = [
    {
        title: "Keynote: Imaging & Anatomy Education",
        event: "Imaging Summit 2025",
        date: "2025-11-20",
        location: "Tokyo",
        url: "#",
    },
];

const past: Talk[] = [
    {
        title: "Abdominal CT: Practical Pearls",
        event: "JSR 2025",
        date: "2025-03-15",
        location: "Osaka",
        url: "#",
    },
    {
        title: "Radiology Curriculum Design",
        event: "MedEd Conference",
        date: "2024-10-05",
        location: "Nagoya",
    },
];

export default function TalksPage() {
    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Talks & Media
            </h1>

            <section className="mt-6">
                <h2 className="text-lg font-medium">Upcoming</h2>
                <ul className="mt-3 space-y-3">
                    {upcoming.map((t, i) => (
                        <li key={i} className="card">
                            <div className="text-sm opacity-70">
                                {t.date}
                                {t.location ? ` · ${t.location}` : ""}
                            </div>
                            <div className="mt-1 font-medium">
                                {t.url ? (
                                    <a href={t.url} className="hover:underline">
                                        {t.title}
                                    </a>
                                ) : (
                                    t.title
                                )}
                            </div>
                            <div className="mt-1 text-sm">{t.event}</div>
                        </li>
                    ))}
                    {upcoming.length === 0 && (
                        <li className="opacity-70">No upcoming events.</li>
                    )}
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-lg font-medium">Past</h2>
                <ul className="mt-3 space-y-3">
                    {past.map((t, i) => (
                        <li key={i} className="card">
                            <div className="text-sm opacity-70">
                                {t.date}
                                {t.location ? ` · ${t.location}` : ""}
                            </div>
                            <div className="mt-1 font-medium">
                                {t.url ? (
                                    <a href={t.url} className="hover:underline">
                                        {t.title}
                                    </a>
                                ) : (
                                    t.title
                                )}
                            </div>
                            <div className="mt-1 text-sm">{t.event}</div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
