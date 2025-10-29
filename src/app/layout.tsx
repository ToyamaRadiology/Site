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

                <footer className="mt-8 border-t">
                    <div className="container mx-auto px-4 py-6 text-xs opacity-80">
                        <p>
                            本サイトは一般情報の提供を目的とし、個別の医療助言は行いません。緊急時は医療機関を受診してください。
                        </p>
                        <p className="mt-2">
                            © {new Date().getFullYear()} IMAGE Lab
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
