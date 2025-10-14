import Link from "next/link";
import "../styles/globals.css";

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
            <body className="min-h-screen antialiased">
                {/* Header（最小ナビ） */}
                <header className="border-b sticky top-0 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
                    <div className="container mx-auto px-4 h-14 flex items-center justify-between">
                        <Link href="/" className="font-semibold tracking-tight">
                            Yoshitaka Toyama, MD — IMAGE Lab
                        </Link>
                        <nav className="hidden md:flex gap-5 text-sm">
                            <a href="/profile" className="hover:underline">
                                Profile
                            </a>
                            <a href="/publications" className="hover:underline">
                                Publications
                            </a>
                            <a href="/talks" className="hover:underline">
                                Talks
                            </a>
                            <a href="/news" className="hover:underline">
                                News
                            </a>
                            <a href="/contact" className="hover:underline">
                                Contact
                            </a>
                        </nav>
                    </div>
                </header>

                {/* Main */}
                <main
                    id="content"
                    className="container mx-auto px-4 py-6 md:py-10"
                >
                    {children}
                </main>

                {/* Footer（免責 一行） */}
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
