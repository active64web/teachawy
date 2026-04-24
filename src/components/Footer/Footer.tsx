'use client';
import "./Footer.scss";
import Image from "next/image";
import Logo from "../../../public/images/logo-wight-2.png";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Facebook, Linkedin, Youtube, Send } from "lucide-react";
import Wave from "../Wave/Wave";

const Footer = () => {
    const locale = useLocale();
    const isAr = locale === "ar";

    return (
        <>
            <Wave />
            <footer className="footer">

                <div className="container">
                    <div className="main-footer">
                        <div className="col info-col">
                            <div className="logo">
                                <Image
                                    src={Logo} alt="Teachawy"
                                    width={170} height={140}
                                    priority style={{ objectFit: "contain" }} />
                            </div>
                            <p className="description">
                                {isAr
                                    ? "المنصة المتكاملة لإنشاء وإدارة منصتك التعليمية الخاصة بكل سهولة واحترافية."
                                    : "The integrated platform to create and manage your own educational platform with ease and professionalism."}
                            </p>
                            <div className="social">
                                <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                                <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                                <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
                                <a href="#" aria-label="WhatsApp">
                                    <Image src="/icons/whatsApp.svg" alt="whatsApp" width={20} height={20} />
                                </a>
                            </div>
                        </div>

                        <div className="col links-col">
                            <h3>{isAr ? "روابط سريعة" : "Quick Links"}</h3>
                            <ul>
                                <li><Link href="/about">{isAr ? "من نحن" : "Who We Are"}</Link></li>
                                <li><Link href="/pricing">{isAr ? "الأسعار" : "Pricing"}</Link></li>
                                <li><Link href="/blog">{isAr ? "المقالات" : "Articles"}</Link></li>
                                <li><Link href="/how-it-works">{isAr ? "كيف تعمل المنصة؟" : "How It Works"}</Link></li>
                            </ul>
                        </div>

                        <div className="col links-col">
                            <h3>{isAr ? "الدعم التقني" : "Support"}</h3>
                            <ul>
                                <li><Link href="/help">{isAr ? "مركز المساعدة" : "Help Center"}</Link></li>
                                <li><Link href="/privacy">{isAr ? "سياسة الخصوصية" : "Privacy Policy"}</Link></li>
                                <li><Link href="/terms">{isAr ? "الشروط والأحكام" : "Terms & Conditions"}</Link></li>
                            </ul>
                        </div>

                        <div className="col newsletter-col">
                            <h3>{isAr ? "اشترك في النشرة" : "Newsletter"}</h3>
                            <p>{isAr ? "كن أول من يعرف بأحدث التحديثات والمميزات." : "Be the first to know about updates."}</p>
                            <form className="newsletter-form">
                                <input type="email" placeholder={isAr ? "بريدك الإلكتروني" : "Your Email"} required />
                                <button type="submit">
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="bottom-footer">
                        <p>
                            {isAr ? "جميع الحقوق محفوظة © 2026 تيتشاوي" : "All rights reserved © 2026 Teachawy"}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;