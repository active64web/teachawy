import "./Goals.scss";
import { Eye, Rocket, Target } from "lucide-react";

interface Props {
    locale: string
}

const Goals = ({ locale }: Props) => {
    const isAr = locale === "ar";

    const goals = [
        {
            id: 1,
            icon: <Eye size={40} />,
            title: isAr ? "رؤيتنا" : "Our Vision",
            description: isAr
                ? "نطمح لأن تكون تيتشاوي المنصة التعليمية الأبسط والأوضح لتمكين المدرسين من تقديم تجربة تعليمية رقمية منظمة واحترافية."
                : "We aspire for Teachawy to be the simplest and clearest educational platform, empowering teachers to deliver an organized and professional digital learning experience."
        },
        {
            id: 2,
            icon: <Target size={40} />,
            title: isAr ? "رسالتنا" : "Our Mission",
            description: isAr
                ? "نوفّر أدوات تعليمية تساعد المدرسين على إدارة محتواهم ودوراتهم بسهولة، بدون تعقيد تقني أو تشتيت، مع التركيز على جودة التعليم."
                : "We provide educational tools that help teachers manage their content and courses easily, without technical complexity or distraction, while focusing on quality education."
        },
        {
            id: 3,
            icon: <Rocket size={40} />,
            title: isAr ? "هدفنا" : "Our Goal",
            description: isAr
                ? "مساعدة كل مدرس على بناء تجربة تعليمية مستقرة وقابلة للنمو، تخدمه وتخدم طلابه على المدى الطويل."
                : "Helping every teacher build a stable and scalable learning experience that benefits both them and their students in the long term."
        }
    ];

    return (
        <div className="goals">
            <div className="container">
                {goals.map(el => (
                    <div className="box" key={el.id}>
                        <div className="icon">
                            {el.icon}
                        </div>
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Goals;