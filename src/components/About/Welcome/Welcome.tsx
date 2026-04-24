'use client';
import "./Welcome.scss";
import Lottie from "lottie-react";
import educationAnimation from "../../../../public/animations/about-education.json";

const Welcome = ({ locale }: { locale: string }) => {
    const isAr = locale === "ar";

    return (
        <section className="about-welcome">
            <div className="container">
                <div className="content-wrapper">
                    <div className="text-side">
                        <span className="badge">{isAr ? "قصتنا" : "Our Story"}</span>
                        <h2>{isAr ? "نحن نؤمن أن التعليم يستحق تكنولوجيا أفضل" : "We believe education deserves better technology"}</h2>
                        <p>
                            {isAr
                                ? "بدأت رحلة تيتشاوي من ملاحظتنا للتحديات التي يواجهها المدرس العربي في حماية محتواه وإيصاله لطلابه. نحن لسنا مجرد منصة، نحن شريك تقني يهدف لتمكين المعلم من بناء علامته التجارية الخاصة."
                                : "Teachawy's journey began with the challenges Arabic teachers face in protecting and delivering their content. We are more than a platform; we are a technical partner aiming to empower teachers to build their own brands."}
                        </p>

                        <div className="values-list">
                            <div className="value-item">
                                <div className="icon-dot"></div>
                                <span>{isAr ? "حماية المحتوى بأحدث معايير التشفير" : "Content protection with latest encryption"}</span>
                            </div>
                            <div className="value-item">
                                <div className="icon-dot"></div>
                                <span>{isAr ? "استقلالية كاملة لهويتك التعليمية" : "Full independence for your brand"}</span>
                            </div>
                        </div>
                    </div>

                    <div className="image-side">
                        <div className="lottie-container">
                            <Lottie
                                animationData={educationAnimation}
                                loop={true}
                                className="lottie-player"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;