import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Publications",
};

type Pub = {
    title: string;
    authors: string;
    journal: string;
    year: number;
    doi?: string;
    url?: string;
};

const publications: Pub[] = [
    {
        title: "Deep Learning in Abdominal CT: A Practical Overview",
        authors: "Toyama Y, et al.",
        journal: "Radiology",
        year: 2024,
        doi: "10.1148/radiol.2024xxxx",
        url: "#",
    },
    {
        title: "Imaging–Anatomy Correlation for Surgical Planning",
        authors: "Toyama Y, Sato A.",
        journal: "Eur Radiol",
        year: 2023,
        doi: "10.1007/s00330-2023-xxxx",
        url: "#",
    },
    {
        title: "Education Framework for Radiology Residents",
        authors: "Toyama Y",
        journal: "Acad Radiol",
        year: 2022,
        url: "#",
    },
];

export default function PublicationsPage() {
    const sorted = [...publications].sort((a, b) => b.year - a.year);

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Publications
            </h1>

            <ol className="mt-6 space-y-4">
                {sorted.map((p, i) => (
                    <li key={i} className="card">
                        <div className="text-sm opacity-70">
                            {p.year} · {p.journal}
                        </div>
                        <div className="mt-1 font-medium">
                            {p.url ? (
                                <a href={p.url} className="hover:underline">
                                    {p.title}
                                </a>
                            ) : (
                                <span>{p.title}</span>
                            )}
                        </div>
                        <div className="mt-1 text-sm">{p.authors}</div>
                        {p.doi && (
                            <div className="mt-2 text-sm">
                                DOI:{" "}
                                <a
                                    className="hover:underline"
                                    href={`https://doi.org/${p.doi}`}
                                >
                                    {p.doi}
                                </a>
                            </div>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
}
