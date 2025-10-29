type Card = { title: string; href: string; meta?: string };

export function CardGrid({ items, title }: { items: Card[]; title: string }) {
    return (
        <section className="py-8 md:py-12">
            <h2 className="text-2xl md:text-4xl font-semibold">
                {title == "News" ? (
                    <a href="/news" className="h2-anchor">
                        {title}
                    </a>
                ) : (
                    <a href="/publications" className="h2-anchor">
                        {title}
                    </a>
                )}
            </h2>
            <div className="mt-4 grid gap-4 grid-cols-1">
                {items.map((it, i) => (
                    <a
                        key={i}
                        href={it.href}
                        className="card card--divider block hover:opacity-90"
                    >
                        <div className="text-sm opacity-70">{it.meta}</div>
                        <div className="mt-2 font-medium">{it.title}</div>
                    </a>
                ))}
            </div>
        </section>
    );
}
