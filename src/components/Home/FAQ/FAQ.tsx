'use client';
import "./FAQ.scss";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = ({ locale }: { locale: string }) => {
    const isAr = locale === "ar";
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const questions = [
        { q: isAr ? "كيف يتم حماية فيديوهاتي؟" : "How are my videos protected?", a: isAr ? "نوفر أعلى مستويات الحماية من خلال تشفير الفيديوهات ومنع التحميل المباشر." : "We provide top protection through encryption and download prevention." },
        { q: isAr ? "هل يمكنني تخصيص الهوية؟" : "Can I customize the identity?", a: isAr ? "نعم، يمكنك تغيير الألوان والشعار والخطوط بالكامل لتناسب علامتك التجارية." : "Yes, you can fully change colors, logos, and fonts to match your brand." },
        { q: isAr ? "ما هي طرق الدفع؟" : "What are the payment methods?", a: isAr ? "ندعم فوري، فيزا، ماستر كارد، والمحافظ الإلكترونية المحلية." : "We support Fawry, Visa, Mastercard, and local e-wallets." },
        { q: isAr ? "هل أحتاج لخبرة تقنية؟" : "Do I need tech experience?", a: isAr ? "لا، لوحة التحكم بسيطة جداً وفريقنا يدعمك خطوة بخطوة." : "No, the dashboard is simple and our team supports you step by step." },
        { q: isAr ? "هل يوجد نسخة تجريبية؟" : "Is there a trial version?", a: isAr ? "بالطبع، يمكنك تجربة المنصة بجميع مميزاتها قبل الاشتراك." : "Sure, you can try the platform with all features before subscribing." },
        { q: isAr ? "كيف أتواصل مع الدعم؟" : "How to contact support?", a: isAr ? "دعمنا متاح 24/7 عبر واتساب والبريد الإلكتروني." : "Our support is available 24/7 via WhatsApp and email." }
    ];

    return (
        <section className="faq-section">
            <div className="container">
                <div className="section-header">
                    <h2>{isAr ? "الأسئلة الشائعة" : "Common Questions"}</h2>
                    <div className="title-line"></div>
                </div>

                <div className="faq-grid">
                    {questions.map((item, index) => (
                        <div
                            className={`faq-card ${activeIndex === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                            <div className="card-header">
                                <h4>{item.q}</h4>
                                <div className="plus-icon">
                                    {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="inner-text">{item.a}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;