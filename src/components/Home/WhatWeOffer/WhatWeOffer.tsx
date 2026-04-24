'use client';
import Wave from "@/components/Wave/Wave";
import "./WhatWeOffer.scss";
import Image from "next/image";

interface Props {
    locale: string
}

const WhatWeOffer = ({ locale }: Props) => {
    const isAr = locale === "ar";

    const features = [
        {
            image: "/images/web-site.png",
            title: isAr ? 'موقع احترافي' : 'Professional Website',
            desc: isAr
                ? 'منصة بتصميم عصري وسريع تمنحك حضوراً قوياً أمام طلابك.'
                : 'A modern, fast platform that gives you a strong online presence.',
        },
        {
            image: "/images/management.png",
            title: isAr ? 'تحكم وإدارة سهلة' : 'Easy Management',
            desc: isAr
                ? 'لوحة تحكم بسيطة لإدارة المحتوى والكورسات والطلاب بكل سهولة.'
                : 'A simple dashboard to manage content, courses, and students easily.',
        },
        {
            image: "/images/communication.png",
            title: isAr ? 'متابعة وتواصل' : 'Tracking & Support',
            desc: isAr
                ? 'متابعة دقيقة لمستوى الطلاب وتواصل مباشر وسريع من مكان واحد.'
                : 'Precise student tracking and direct communication from one place.',
        },
        {
            image: "/images/performance.png",
            title: isAr ? 'أداء وسعر مناسب' : 'Performance & Value',
            desc: isAr
                ? 'أفضل أداء تقني يساعدك على النمو بسعر تنافسي يناسب بدايتك.'
                : 'Top-notch technical performance to help you grow at a fair price.',
        },
    ];

    return (
        <section className="what-we-offer">
            <Wave />
            <div className="offer-content">
                <div className="container">
                    <div className="section-header">
                        <h2>
                            {isAr ? "إيه اللي تيتشاوي بيقدمهولك؟" : "What does Teachawy offer you?"}
                        </h2>
                        <div className="header-line"></div>
                    </div>

                    <div className="offer-grid">
                        {features.map((el, idx) => (
                            <div className="offer-card" key={idx}>
                                <div className="image-box">
                                    <Image
                                        src={el.image}
                                        alt={el.title}
                                        width={180}
                                        height={180}
                                        priority={idx < 2}
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                                <h4>{el.title}</h4>
                                <p>{el.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatWeOffer;