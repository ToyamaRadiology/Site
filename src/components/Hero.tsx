import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-[80vh] md:min-h-screen">
            {/* 背景写真（全面） */}
            <Image
                src="/images/hero-portrait.png"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />

            {/* 上→下のグラデ・オーバーレイ（上やや濃い/下やや白み） */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-black/40" />

            {/* テキスト（中央寄せ：縦横センター） */}
            <div className="relative z-10 flex items-center justify-center min-h-[80vh] md:min-h-screen px-6 py-16 md:py-24 lg:py-32">
                <div className="text-center max-w-3xl">
                    <h1 className="text-white text-3xl md:text-6xl font-semibold tracking-tight">
                        外山 由貴
                        <span className="ml-3 align-baseline text-white/80 text-lg md:text-2xl font-normal tracking-normal">
                            MD, PhD
                        </span>
                    </h1>

                    {/* ローマ字表記：大文字＋やや広いトラッキングで控えめに演出 */}
                    <div className="mt-2 text-white/70 text-base md:text-xl tracking-wider uppercase">
                        Yoshitaka Toyama
                    </div>

                    <p className="mt-4 text-white/90 text-lg md:text-2xl">
                        東北大学病院 放射線診断科 助教
                    </p>

                    <div className="mt-8 flex items-center justify-center gap-3">
                        <a
                            href="/publications"
                            className="btn"
                            style={{ background: "white", color: "#0a0a0a" }}
                        >
                            Publications
                        </a>
                        <a
                            href="/contact"
                            className="btn"
                            style={{
                                background: "transparent",
                                color: "white",
                                border: "1px solid rgba(255,255,255,.65)",
                            }}
                        >
                            Profile
                        </a>
                    </div>
                </div>
            </div>

            {/* 下端グラデで切り替わりを自然に */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-48 md:h-64 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
        </section>
    );
}
