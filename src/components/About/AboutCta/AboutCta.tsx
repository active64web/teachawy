'use client';
import "./AboutCta.scss";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Sparkles } from "lucide-react";

const AboutCta = ({ locale }: { locale: string }) => {
    const isAr = locale === "ar";

    return (
        <section className="about-cta">
            <div className="container">
                <div className="cta-card">
                    <div className="content">
                        <div className="icon-badge">
                            <Sparkles size={20} />
                        </div>
                        <h2>
                            {isAr
                                ? "هل أنت مستعد لبناء إمبراطوريتك التعليمية؟"
                                : "Ready to build your educational empire?"}
                        </h2>
                        <p>
                            {isAr
                                ? "انضم إلى تيتشاوي اليوم وابدأ بتأمين محتواك والوصول لطلابك بهويتك الخاصة."
                                : "Join Teachawy today and start securing your content and reaching students with your own brand."}
                        </p>
                        <div className="actions">
                            <Link href="/register" className="btn-primary">
                                {isAr ? "ابدأ الآن مجاناً" : "Start Now for Free"}
                                <ArrowRight size={18} className={isAr ? "rotate-180" : ""} />
                            </Link>
                            <Link href="/pricing" className="btn-outline">
                                {isAr ? "مشاهدة الخطط" : "View Pricing"}
                            </Link>
                        </div>
                    </div>

                    {/* أشكال ديكورية 3D في الخلفية */}
                    <div className="shape circle-1"></div>
                    <div className="shape circle-2"></div>
                </div>
            </div>
        </section>
    );
};

export default AboutCta;