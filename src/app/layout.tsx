import Link from "next/link";
import Image from "next/image";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import MobileMenu from "@/components/MobileMenu";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const noto = Noto_Sans_JP({
    weight: ["400", "500", "700"],
    variable: "--font-notojp",
    display: "swap",
    preload: false, // 日本語Webフォントの先読みを抑えて初期表示を安定
});

export const metadata: Metadata = {
    metadataBase: new URL("https://yoshitakatoyama.com"),
    title: {
        default: "外山 由貴, MD, PhD - IMAGE Lab",
        template: "%s · IMAGE Lab", // ページごとのタイトルに適用
    },
    description:
        "Imaging & Anatomy for Groundbreaking Education and Collaborative Research",
    alternates: { canonical: "/", languages: { ja: "/ja", en: "/en" } },
    openGraph: {
        siteName: "外山 由貴, MD, PhD - IMAGE Lab",
        type: "website",
        url: "https://yoshitakatoyama.com/",
        title: "外山 由貴, MD, PhD - IMAGE Lab",
        description:
            "Imaging & Anatomy for Groundbreaking Education and Collaborative Research",
        images: ["/og/default.png"],
    },
    twitter: { card: "summary_large_image" },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="ja"
            suppressHydrationWarning
            data-theme={
                (typeof window === "undefined"
                    ? "classic"
                    : new URLSearchParams(window.location.search).get(
                          "theme"
                      ) || "classic") as string
            }
        >
            <body
                className={`${inter.variable} ${noto.variable} min-h-screen antialiased`}
            >
                <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
                    {" "}
                    <div className="h-14 w-full flex items-center justify-between px-4 md:px-6 lg:px-8">
                        <Link
                            href="/"
                            className="flex items-center gap-3 brand-link font-semibold tracking-tight"
                        >
                            <Image
                                src="/brand/logo-light.svg"
                                alt="IMAGE Lab"
                                className="h-12 w-auto logo-light"
                                width={96}
                                height={24}
                                priority
                            />
                            <Image
                                src="/brand/logo-dark.svg"
                                alt="IMAGE Lab"
                                className="h-12 w-auto logo-dark"
                                width={96}
                                height={24}
                                priority
                            />
                            <span className="text-xl md:text-xl leading-none font-semibold font-jp">
                                外山 由貴
                            </span>
                            <span className="brand-badge sm:inline-block font-latin">
                                IMAGE Lab
                            </span>
                        </Link>
                        <nav className="hidden md:flex gap-5 text-sm font-latin header-nav">
                            <a href="/publications" className="nav-link">
                                Publications
                            </a>
                            <a href="/news" className="nav-link">
                                News
                            </a>
                            <a href="/profile" className="nav-link">
                                Profile
                            </a>
                            <a href="/contact" className="nav-link">
                                Contact
                            </a>
                        </nav>

                        <div className="md:hidden">
                            <MobileMenu />
                        </div>
                    </div>
                </header>

                <main id="content" className="">
                    {children}
                </main>

                <footer className="mt-10 border-t">
                    <div className="px-4 md:px-6 lg:px-8 py-8">
                        <div className="flex items-center justify-center w-full">
                            <nav
                                aria-label="Footer"
                                className="flex w-full items-center justify-evenly gap-6 text-sm font-latin header-nav flex-nowrap text-center"
                            >
                                <a href="/sitemap.xml" className="nav-link">
                                    Sitemap
                                </a>
                                <a href="/privacy" className="nav-link">
                                    Privacy
                                </a>
                                <a
                                    href="https://www.ameba.jp/profile/general/thk-rad118/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-link group inline-flex items-center"
                                >
                                    Ameba Blog
                                    <svg
                                        className="ml-1 inline-block h-3.5 w-3.5 align-[-0.125em] opacity-80 transition-opacity group-hover:opacity-100"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"
                                        />
                                    </svg>
                                </a>
                            </nav>
                        </div>
                        <div className="text-center mt-4 text-xs opacity-70">
                            &copy;{new Date().getFullYear()} IMAGE Lab
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
