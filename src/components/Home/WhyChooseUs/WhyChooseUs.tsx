'use client';
import "./WhyChooseUs.scss";
import Lottie from "lottie-react";
import booksAnimation from "../../../../public/animations/books.json";


interface Props {
    locale: string
}

const WhyChooseUs = ({ locale }: Props) => {
    const isAr = locale === "ar";

    const list = [
        {
            title: isAr ? 'منصة تعليمية لكل الأنشطة' : 'Educational Platform for All Activities',
            desc: isAr
                ? 'حل واحد ينفع للمدرسين، الحضانات، والأكاديميات بمختلف أحجامها.'
                : 'One solution suitable for teachers, nurseries, and academies of all sizes.',
        },
        {
            title: isAr ? 'نظام جاهز وسهل الاستخدام' : 'Ready & Easy-to-Use System',
            desc: isAr
                ? 'كل اللي محتاجه لإدارة نشاطك التعليمي بدون تعقيد تقني.'
                : 'Everything you need to manage your educational activity without complexity.',
        },
        {
            title: isAr ? 'إدارة وتنظيم من مكان واحد' : 'Manage Everything in One Place',
            desc: isAr
                ? 'تحكم في المحتوى والمتعلمين والتواصل معاهم من لوحة واحدة.'
                : 'Control content, learners, and communication from a single dashboard.',
        },
        {
            title: isAr ? 'حل يكبر مع شغلك' : 'A Solution That Grows With You',
            desc: isAr
                ? 'منصة مرنة تبدأ بسيطة وتكبر معاك حسب احتياجاتك المتزايدة.'
                : 'A flexible platform that starts simple and scales with your needs.',
        },
    ];

    return (
        <section className="why-choose-us">
            <div className="container">
                <div className="content-side">
                    <div className="section-header">
                        <h2>
                            {isAr ? "ليه تختار تيتشاوي؟" : "Why Choose Teachawy?"}
                        </h2>
                        <div className="title-line"></div>
                    </div>

                    <ul className="reasons-list">
                        {list.map((el, idx) => (
                            <li className="reason-item" key={idx}>
                                <div className="number-badge">{`0${idx + 1}`}</div>
                                <div className="text-content">
                                    <h4>{el.title}</h4>
                                    <p>{el.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="image-side">
                    <div className="lottie-wrapper">
                        <Lottie
                            animationData={booksAnimation}
                            loop={true}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;