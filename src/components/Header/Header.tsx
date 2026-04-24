'use client';
import "./Header.scss";
import Image from "next/image";
import Logo from "../../../public/images/logo.png"
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe, Menu } from "lucide-react";

const Header = () => {
    const t = useTranslations('navLins');
    const pathname = usePathname();
    const locale = useLocale();
    const [showLang, setShowLang] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const menuRef = useRef<HTMLLIElement>(null);
    const menuLangPhoneRef = useRef<HTMLDivElement>(null);
    const menuLinksRef = useRef<HTMLElement>(null);
    const btnMenuRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                menuLangPhoneRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !menuLangPhoneRef.current.contains(event.target as Node)
            ) {
                setShowLang(false);
            }
            if (btnMenuRef.current
                && menuLinksRef.current
                && !btnMenuRef.current.contains(event.target as Node)
                && !menuLinksRef.current.contains(event.target as Node)
            ) {
                setOpenMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [openMenu]);

    return (
        <header className="header">
            <div className="container">
                <Link href="/" className="logo">
                    <Image
                        src={Logo}
                        alt="logo"
                        width={90}
                        height={80}
                        priority
                        style={{ objectFit: "contain" }}
                    />
                </Link>

                <nav className={`${openMenu ? "open" : ""}`} ref={menuLinksRef}>
                    <ul>
                        <li><Link href="/" onClick={() => setOpenMenu(false)}>{t('home')}</Link></li>
                        <li><Link href="/about" onClick={() => setOpenMenu(false)}>{t('about')}</Link></li>
                        <li><Link href="/plans" onClick={() => setOpenMenu(false)}>{t('plans')}</Link></li>
                        <li className="lang" ref={menuRef}>
                            <button onClick={() => setShowLang(prev => !prev)}>
                                <ChevronDown size={18} /> {locale === "ar" ? "العربية" : "English"}
                            </button>
                            {showLang && (
                                <div className="menu-lang">
                                    <Link href={pathname} locale={locale === "en" ? "ar" : "en"} onClick={() => setShowLang(false)}>
                                        <span>{locale === "en" ? "العربية" : "English"}</span> <Globe size={16} />
                                    </Link>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <div className="lang-phone" ref={menuLangPhoneRef}>
                        <button onClick={() => setShowLang(prev => !prev)}>
                            <ChevronDown size={20} /> {locale === "ar" ? "العربية" : "English"}
                        </button>
                        {showLang && (
                            <div className="menu-lang">
                                <Link href={pathname} locale={locale === "en" ? "ar" : "en"} onClick={() => setShowLang(false)}>
                                    <span>{locale === "en" ? "العربية" : "English"}</span> <Globe size={16} />
                                </Link>
                            </div>
                        )}
                    </div>

                    <button ref={btnMenuRef} className="menu-icon" onClick={() => setOpenMenu(prev => !prev)}>
                        <Menu size={24} />
                    </button>

                    <Link href="/register" className="btn-start">{t("start_now")}</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;