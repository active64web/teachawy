'use client';
import "./HowItWorks.scss";
import { MessageSquareText, PenTool, Rocket, ArrowRight } from "lucide-react";

const HowItWorks = ({ locale }: { locale: string }) => {
    const isAr = locale === "ar";

    const steps = [
        {
            icon: <MessageSquareText size={32} />,
            title: isAr ? "تواصل واطلب نسختك" : "Request Your Demo",
            desc: isAr
                ? "تواصل معنا مباشرة عبر الواتساب لتحديد عدد طلابك واحتياجاتك الفنية الخاصة."
                : "Contact us via WhatsApp to define your student count and technical needs.",
            color: "var(--secondary-color)"
        },
        {
            icon: <PenTool size={32} />,
            title: isAr ? "نخصص لك الهوية" : "Brand Customization",
            desc: isAr
                ? "نقوم بإعداد منصتك بشعارك الخاص وألوانك لضمان ظهورك باحترافية أمام طلابك."
                : "We set up your platform with your logo and colors to ensure a professional look.",
            color: "var(--main-color)"
        },
        {
            icon: <Rocket size={32} />,
            title: isAr ? "استلم وابدأ التدريس" : "Launch & Teach",
            desc: isAr
                ? "نسلمك لوحة تحكم سهلة ونساعدك في رفع أول دورة تدريبية لك في أقل من 24 ساعة."
                : "Receive your dashboard and let us help you upload your first course in 24h.",
            color: "#22c55e" // أخضر للنجاح والبدء
        }
    ];

    return (
        <section className="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2>{isAr ? "رحلة انطلاق منصتك التعليمية" : "How To Launch Your Platform"}</h2>
                    <p>{isAr ? "خطوات بسيطة تفصلك عن امتلاك منصتك الخاصة مع تيتشاوي" : "Simple steps to own your private platform with Teachawy"}</p>
                </div>

                <div className="steps-wrapper">
                    {steps.map((step, index) => (
                        <div className="step-card" key={index}>
                            <div className="step-number">0{index + 1}</div>
                            <div className="icon-box" style={{ backgroundColor: step.color }}>
                                {step.icon}
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                            {index < steps.length - 1 && (
                                <div className="step-arrow">
                                    <ArrowRight size={24} className={isAr ? "rotate-180" : ""} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="cta-manual">
                    <p>{isAr ? "جاهز تبدأ النهاردة؟" : "Ready to start today?"}</p>
                    <a href="https://wa.me/201234567890" target="_blank" className="btn-manual">
                        {isAr ? "تحدث مع فريق العمل الآن" : "Chat with our team now"}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;