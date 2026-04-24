'use client';
import { ShieldCheck, LayoutDashboard, Globe } from "lucide-react";
import "./IntegratedSolution.scss";

const IntegratedSolution = ({ locale }: { locale: string }) => {
    const isAr = locale === "ar";

    const solutions = [
        {
            icon: <ShieldCheck size={32} />,
            title: isAr ? "حماية تتجاوز التوقعات" : "Security Beyond Expectations",
            desc: isAr ? "نظام تشفير متطور يمنع تسجيل الشاشة وتحميل الفيديوهات لضمان بقاء مجهودك لك وحدك." : "Advanced encryption that prevents screen recording and downloads to ensure your effort remains yours."
        },
        {
            icon: <LayoutDashboard size={32} />,
            title: isAr ? "لوحة تحكم ذكية" : "Smart Dashboard",
            desc: isAr ? "واجهة بسيطة تمكنك من إدارة طلابك، فيديوهاتك، واختباراتك في مكان واحد وبأقل مجهود." : "A simple interface to manage your students, videos, and exams in one place with minimal effort."
        },
        {
            icon: <Globe size={32} />,
            title: isAr ? "انطلق بهويتك الخاصة" : "Launch with Your Identity",
            desc: isAr
                ? "ابدأ فوراً بنطاق فرعي مجاني (YourName.teachawy.com)، مع إمكانية ربط نطاقك الخاص بالكامل في أي وقت لتعزيز علامتك التجارية."
                : "Start instantly with a free subdomain (YourName.teachawy.com), with the ability to link your own custom domain anytime."
        }
    ];

    return (
        <section className="integrated-solution">
            <div className="container">
                <div className="section-header">
                    <h2>{isAr ? "حلول ذكية لنمو تعليمك" : "Smart Solutions for Growth"}</h2>
                    <div className="line"></div>
                </div>

                <div className="solutions-grid">
                    {solutions.map((item, index) => (
                        <div className="solution-card" key={index}>
                            <div className="icon-box">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntegratedSolution;