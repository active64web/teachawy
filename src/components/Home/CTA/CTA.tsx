'use client';
import "./CTA.scss";
import { Rocket, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface Props { locale: string }

const CTA = ({ locale }: Props) => {
    const isAr = locale === "ar";

    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-box">
                    {/* عناصر الأنيميشن في الخلفية */}
                    <div className="floating-icon icon-1"><Rocket size={40} /></div>
                    <div className="floating-icon icon-2"><Sparkles size={30} /></div>

                    <div className="cta-content">
                        <h2>
                            {isAr
                                ? "جاهز تبدأ رحلتك التعليمية مع تيتشاوي؟"
                                : "Ready to start your teaching journey?"}
                        </h2>
                        <p>
                            {isAr
                                ? "انضم لآلاف المعلمين وابنِ منصتك الاحترافية في أقل من 10 دقائق."
                                : "Join thousands of teachers and build your professional platform in less than 10 minutes."}
                        </p>

                        <div className="cta-actions">
                            <Link href="/register" className="btn-white">
                                {isAr ? "ابدأ الآن مجاناً" : "Start Now for Free"}
                                <ArrowRight size={20} className={isAr ? "rotate-180" : ""} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;