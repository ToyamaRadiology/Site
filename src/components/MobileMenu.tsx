"use client";
import { useEffect, useRef, useState } from "react";
import Portal from "@/components/Portal";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);
    const firstLinkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        // open の時だけ画面スクロールを止める
        if (open) {
            const { style } = document.documentElement;
            const prevOverflow = style.overflow;
            const prevPaddingRight = style.paddingRight;
            // スクロールバーの幅を計算（レイアウトシフト防止）
            const scrollBarW =
                window.innerWidth - document.documentElement.clientWidth;
            style.overflow = "hidden";
            if (scrollBarW > 0) style.paddingRight = `${scrollBarW}px`;
            return () => {
                style.overflow = prevOverflow;
                style.paddingRight = prevPaddingRight;
            };
        }
    }, [open]);

    return (
        <>
            {/* トグルボタン（ヘッダー右） */}
            <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((v) => !v)}
                data-open={open}
                className="md:hidden -m-2 inline-flex h-10 w-10 items-center justify-center p-2"
            >
                <span className="hamburger" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
            </button>

            {/* オーバーレイ */}
            <Portal>
                <div
                    onClick={() => setOpen(false)}
                    className={`duration-300 ease-in-out backdrop-blur-sm fixed left-0 right-0 top-14 bottom-0 z-[70]  transition-opacity md:hidden ${
                        open ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                />

                {/* 右ドロワー */}
                <nav
                    id="mobile-menu"
                    role="dialog"
                    aria-modal="true"
                    data-open={open}
                    className={`glass-drawer fixed top-14 right-0 bottom-0 z-[80] w-full bg-[var(--bg)] transition-transform duration-300 ease-in-out will-change-transform overflow-auto md:hidden ${
                        open ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <ul className="px-8 py-4 grid gap-2 text-base font-latin menu-list">
                        <li>
                            <a
                                data-animate
                                ref={firstLinkRef}
                                className="block py-2"
                                href="/publications"
                            >
                                Publications
                            </a>
                        </li>
                        <li>
                            <a data-animate className="block py-2" href="/news">
                                News
                            </a>
                        </li>
                        <li>
                            <a
                                data-animate
                                className="block py-2"
                                href="/profile"
                            >
                                Profile
                            </a>
                        </li>
                        <li>
                            <a
                                data-animate
                                className="block py-2"
                                href="/contact"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </Portal>
        </>
    );
}
