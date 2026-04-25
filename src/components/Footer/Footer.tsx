'use client';
import "./Footer.scss";
import Image from "next/image";
import Logo from "../../../public/images/logo-wight-2.png";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Wave from "../Wave/Wave";

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
);

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
                                <a href="#" aria-label="Facebook">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                                <a href="#" aria-label="YouTube">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
                                </a>
                                <a href="https://wa.me/201234567890" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                                    <Image
                                        src="/icons/whatsApp.svg"
                                        alt="WhatsApp"
                                        width={22}
                                        height={22}
                                        style={{ objectFit: "contain" }}
                                    />
                                </a>
                            </div>
                        </div>

                        {/* باقي الكود... */}
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
                                    <SendIcon />
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