'use client';
import "./Testimonials.scss";
import { Quote, User } from "lucide-react";

interface Props { locale: string }

const Testimonials = ({ locale }: Props) => {
    const isAr = locale === "ar";

    const feedback = [
        { name: isAr ? "أحمد علي" : "Ahmed Ali", job: isAr ? "مدرس فيزياء" : "Physics Teacher", text: isAr ? "تيتشاوي وفرت عليا مجهود كبير في تنظيم الحصص وتواصل أسرع مع الطلاب." : "Teachawy saved me a lot of effort in organizing classes and communicating faster." },
        { name: isAr ? "سارة محمود" : "Sara Mahmoud", job: isAr ? "صاحبة أكاديمية" : "Academy Owner", text: isAr ? "أفضل استثمار عملته لمنصتي، النظام سهل جداً والطلاب حابين التجربة." : "The best investment I made for my platform, the system is very easy." },
        { name: isAr ? "محمد إبراهيم" : "Mohamed Ibrahim", job: isAr ? "مدرس لغات" : "Languages Teacher", text: isAr ? "الدعم الفني والسرعة في الأداء هي أكثر ما يميز تيتشاوي عن غيرها." : "Technical support and speed are what distinguish Teachawy from others." },
        { name: isAr ? "ليلى حسن" : "Layla Hassan", job: isAr ? "مدرسة كيمياء" : "Chemistry Teacher", text: isAr ? "حماية المحتوى التعليمي في تيتشاوي أعطتني ثقة كبيرة في رفع فيديوهاتي." : "Content protection in Teachawy gave me great confidence." },
    ];

    const tripleFeedback = [...feedback, ...feedback, ...feedback];

    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>{isAr ? "قالوا عن تيتشاوي" : "What they say about Teachawy"}</h2>
                    <div className="title-line"></div>
                </div>
            </div>

            <div className="marquee-wrapper" dir="ltr">
                <div className="marquee-content">
                    {tripleFeedback.map((item, idx) => (
                        <div className="testi-card" key={idx} dir={isAr ? "rtl" : "ltr"}>
                            <Quote className={`quote-icon ${isAr ? "flip" : ""}`} size={24} fill="currentColor" />
                            <p className="text">{item.text}</p>
                            <div className="user-info">
                                <div className="avatar">
                                    <User size={18} color="#fff" />
                                </div>
                                <div className="details">
                                    <div className="name-with-icon">
                                        <h4>{item.name}</h4>
                                        <div className="verified-badge"></div>
                                    </div>
                                    <span>{item.job}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;