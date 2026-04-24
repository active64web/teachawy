import "./IntegratedSolution.scss";
import Image from "next/image";

interface Props {
    locale: string
}

const IntegratedSolution = ({ locale }: Props) => {
    const isAr = locale === "ar";

    const list = [
        {
            desc: isAr
                ? "حماية كاملة للمحتوى التعليمي مع بيئة آمنة لإدارة الدروس والبيانات."
                : "Full content protection with a secure environment to manage lessons and data.",
        },
        {
            desc: isAr
                ? "استضافة قوية وسيرفرات مستقرة تضمن سرعة وأداء عالي بدون انقطاع."
                : "Powerful hosting and stable servers ensuring high speed and uninterrupted performance.",
        },
        {
            desc: isAr
                ? "تنظيم احترافي للكورسات والطلاب مع تجربة استخدام سهلة وواضحة."
                : "Professional organization of courses and students with a smooth user experience.",
        },
        {
            desc: isAr
                ? "منصة مرنة قابلة للنمو، تبدأ بسيطة وتكبر مع توسّع نشاطك."
                : "A flexible platform that starts simple and scales as your educational business grows.",
        },
    ]

    return (
        <div className="integrated-solution">
            <div className="container">
                <div className="image">
                    <Image
                        src="/images/what-we-offer.png"
                        alt="what-we-offer"
                        width={500}
                        height={500}
                        style={{ objectFit: "contain" }}
                    />
                </div>

                <div className="content">
                    <h2>
                        {locale === "ar"
                            ? "حل متكامل لإدارة التعليم باحترافية"
                            : "A Complete Solution for Professional Learning Management"}
                    </h2>

                    <ul className="list">
                        {list.map((el, idx) => (
                            <li key={idx}>
                                <span>{`0${idx + 1}`}</span>
                                <p>{el.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default IntegratedSolution;