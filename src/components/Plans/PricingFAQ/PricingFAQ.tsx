'use client';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from "lucide-react";
import "./PricingFAQ.scss";

const PricingFAQ = ({ locale }: { locale: string }) => {
    const isAr = locale === "ar";
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: isAr ? "ما هو المقصود بالمقاعد النشطة؟" : "What are Active Seats?",
            a: isAr ? "المقعد هو مكان محجوز لمتدرب واحد يتابع المحتوى حالياً. يمكنك تسجيل عدد غير محدود من المتدربين، وفقط من لديهم اشتراك نشط أو دخول حالي هم من يشغلون المقاعد." : "A seat is a reserved spot for one active learner. You can register unlimited users, but only those with active access occupy the seats."
        },
        {
            q: isAr ? "ماذا يحدث إذا استهلكت جميع المقاعد في باقتي؟" : "What if I use all my seats?",
            a: isAr ? "عند الوصول للحد الأقصى، لن يتمكن مشترك جديد من الدخول حتى تقوم بتوسعة الباقة. يمكنك إضافة أي عدد من المقاعد الإضافية يدوياً من لوحة التحكم بسعر ثابت (5 ج.م للمقعد) لتفعيلها فوراً." : "Once the limit is reached, new users cannot join until you expand. You can manually add any number of extra seats from your dashboard for a flat rate (5 EGP/seat) to activate them instantly."
        },
        {
            q: isAr ? "هل يمكنني متابعة استهلاك المقاعد لحظياً؟" : "Can I track seat usage in real-time?",
            a: isAr ? "بالطبع، توفر لك لوحة الإدارة عداداً لحظياً يوضح عدد المقاعد المشغولة والمتبقية، مع تنبيهات عند اقتراب نفاذ المقاعد لتتمكن من التوسع قبل حدوث أي توقف." : "Yes, the dashboard provides a real-time counter of occupied and remaining seats, with alerts when you're close to the limit so you can expand before any interruption."
        },
        {
            q: isAr ? "كيف يتم حماية الفيديوهات من السرقة؟" : "How is my video content protected?",
            a: isAr ? "نستخدم تقنيات تشفير متقدمة تمنع التحميل المباشر، بالإضافة إلى حماية ضد تسجيل الشاشة ووضع علامة مائية (Watermark) ديناميكية تظهر بيانات المتدرب لمنع التسريب." : "We use advanced encryption to prevent direct downloads, plus screen recording protection and dynamic watermarks to prevent leaks."
        },
        {
            q: isAr ? "هل يمكنني تغيير باقتي في أي وقت؟" : "Can I change my plan anytime?",
            a: isAr ? "نعم، يمكنك الترقية لباقة أعلى في أي وقت والحصول على الميزات الجديدة فوراً، وسيتم تسوية الفروق المالية تلقائياً." : "Yes, you can upgrade to a higher plan anytime and get new features instantly; the price difference will be adjusted automatically."
        }
    ];

    return (
        <section className="pricing-faq">
            <div className="container">
                <div className="faq-header">
                    <HelpCircle size={24} />
                    <h2>{isAr ? "لديك أسئلة؟ نحن هنا للإجابة" : "Have Questions? We're here to help"}</h2>
                </div>
                <div className="faq-wrapper">
                    {faqs.map((faq, i) => (
                        <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`} onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                            <div className="faq-question">
                                <span>{faq.q}</span>
                                <ChevronDown size={18} />
                            </div>
                            <div className="faq-answer">
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingFAQ;