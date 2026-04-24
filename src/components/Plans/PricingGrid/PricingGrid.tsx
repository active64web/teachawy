'use client';
import { useState } from 'react';
import { Check, Info, Plus } from "lucide-react";
import "./PricingGrid.scss";

const PricingGrid = ({ locale }: { locale: string }) => {
    const isAr = locale === "ar";
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: isAr ? "باقة الانطلاق" : "Launch Plan",
            monthlyPrice: 299,
            annualPrice: 249,
            extraSeatPrice: isAr ? "5 ج.م" : "5 EGP",
            featured: false,
            previousPlus: null,
            features: [
                { text: isAr ? "لوحة إدارة متكاملة للمحتوى" : "Full Content Management", active: true },
                { text: isAr ? "50 مقعد نشط للمتدربين" : "50 Active Seats", active: true },
                { text: isAr ? "تشفير وحماية ضد تسجيل الشاشة" : "Screen Record Protection", active: true },
                { text: isAr ? "تطبيق ويب سريع (PWA)" : "Fast Web App (PWA)", active: true },
            ]
        },
        {
            name: isAr ? "الباقة الاحترافية" : "Professional Plan",
            monthlyPrice: 599,
            annualPrice: 499,
            extraSeatPrice: isAr ? "5 ج.م" : "5 EGP",
            featured: true,
            previousPlus: isAr ? "كل ميزات باقة الانطلاق، بالإضافة إلى:" : "All Launch features, plus:",
            features: [
                { text: isAr ? "300 مقعد نشط متزامن" : "300 Concurrent Seats", active: true },
                { text: isAr ? "تخصيص الهوية التجارية (Brand)" : "Full Brand Customization", active: true },
                { text: isAr ? "أتمتة التواصل عبر WhatsApp & Zoom" : "WhatsApp & Zoom Automation", active: true },
                { text: isAr ? "تقارير أداء المتدربين التلقائية" : "Automated Student Analytics", active: true },
            ]
        },
        {
            name: isAr ? "باقة المؤسسات" : "Enterprise Plan",
            monthlyPrice: 999,
            annualPrice: 849,
            extraSeatPrice: isAr ? "5 ج.م" : "5 EGP",
            featured: false,
            previousPlus: isAr ? "كل ميزات الباقة الاحترافية، بالإضافة إلى:" : "All Professional features, plus:",
            features: [
                { text: isAr ? "1000 مقعد أساسي" : "1000 Base Seats", active: true },
                { text: isAr ? "ربط نطاق خاص (Custom Domain)" : "Custom Domain Integration", active: true },
                { text: isAr ? "شهادات إتمام دورات تلقائية" : "Automated Certificates", active: true },
                { text: isAr ? "سيرفرات خاصة فائقة الأداء" : "High-Performance Servers", active: true },
            ]
        }
    ];

    return (
        <section className="pricing-grid">
            <div className="container">
                <div className="seat-info-box">
                    <Info size={18} />
                    <p>{isAr ? "المقعد هو مكان محجوز لمتدرب واحد؛ يمكنك زيادة عدد المقاعد يدوياً في أي وقت لتوسعة استيعاب منصتك." : "A seat is a reserved spot; you can manually increase seats anytime to expand your platform capacity."}</p>
                </div>

                <div className="toggle-wrapper">
                    <span className={!isAnnual ? "active" : ""}>{isAr ? "شهري" : "Monthly"}</span>
                    <button className={`switch ${isAnnual ? "on" : ""}`} onClick={() => setIsAnnual(!isAnnual)}>
                        <span className="slider"></span>
                    </button>
                    <span className={`annual-label ${isAnnual ? "active" : ""}`}>
                        {isAr ? "سنوي" : "Annual"}
                        <small className="save-badge">{isAr ? "توفير 20%" : "Save 20%"}</small>
                    </span>
                </div>

                <div className="grid-wrapper">
                    {plans.map((plan, i) => {
                        const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
                        return (
                            <div key={i} className={`plan-card ${plan.featured ? 'featured' : ''}`}>
                                {plan.featured && <span className="popular">{isAr ? "الأكثر ملاءمة" : "Best Value"}</span>}
                                <h3>{plan.name}</h3>
                                <div className="price-tag">
                                    <div className="main-price">
                                        <span className="num">{currentPrice}</span>
                                        <span className="curr">{isAr ? "ج.م / شهر" : "EGP / mo"}</span>
                                    </div>
                                    <span className="extra-info">{isAr ? `+ ${plan.extraSeatPrice} لكل مقعد إضافي` : `+ ${plan.extraSeatPrice} per extra seat`}</span>
                                </div>

                                <div className="feat-container">
                                    {plan.previousPlus && (
                                        <div className="previous-plus">
                                            <Plus size={14} />
                                            <span>{plan.previousPlus}</span>
                                        </div>
                                    )}
                                    <ul className="feat-list">
                                        {plan.features.map((f, j) => (
                                            <li key={j}><Check size={16} />{f.text}</li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="select-btn">{isAr ? "ابدأ الآن" : "Start Now"}</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PricingGrid;