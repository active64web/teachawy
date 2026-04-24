'use client';
import "./Philosophy.scss";
import { Heart, Target, Sparkles } from "lucide-react";

const Philosophy = ({ locale }: { locale: string }) => {
    const isAr = locale === "ar";

    const values = [
        {
            icon: <Heart size={28} />,
            title: isAr ? "نحن نهتم بتعبك" : "We Care About Your Effort",
            desc: isAr ? "نعلم أن خلف كل فيديو ساعات من التحضير، ولذلك جعلنا حماية محتواك هي أولويتنا القصوى." : "We know hours of prep go into every video, so protecting your content is our top priority."
        },
        {
            icon: <Target size={28} />,
            title: isAr ? "البساطة هي القوة" : "Simplicity is Power",
            desc: isAr ? "لسنا مجرد نظام معقد؛ هدفنا أن تدير منصتك بضغطة زر واحدة دون الحاجة لخبرة تقنية." : "We're not just a complex system; our goal is for you to manage your platform with one click."
        },
        {
            icon: <Sparkles size={28} />,
            title: isAr ? "النمو المشترك" : "Mutual Growth",
            desc: isAr ? "نجاحك كمعلم هو وقود استمرارنا؛ نحن نكبر حينما نرى طلابك يحققون أهدافهم من خلالك." : "Your success as a teacher fuels us; we grow when your students achieve their goals through you."
        }
    ];

    return (
        <section className="philosophy-section">
            <div className="container">
                <div className="header-box">
                    <span className="tag">{isAr ? "من نحن فعلياً" : "Who we really are"}</span>
                    <h2>{isAr ? "أكثر من مجرد سطر كود" : "More than just lines of code"}</h2>
                    <p>
                        {isAr
                            ? "في تيتشاوي، نحن فريق من المطورين والمصممين الذين آمنوا بأن المعلم هو العمود الفقري للمجتمع، وأنه يستحق أفضل الأدوات التقنية ليوصل رسالته بأمان."
                            : "At Teachawy, we are a team of developers and designers who believe teachers are the backbone of society and deserve the best tech tools."}
                    </p>
                </div>

                <div className="values-grid">
                    {values.map((v, i) => (
                        <div className="value-card" key={i}>
                            <div className="v-icon">{v.icon}</div>
                            <div className="v-content">
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;