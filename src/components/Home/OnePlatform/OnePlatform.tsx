'use client';
import "./OnePlatform.scss";
import {
    GraduationCap,
    MonitorPlay,
    Briefcase,
    Wifi,
    BookOpen,
    UserRound
} from "lucide-react";

interface Props {
    locale: string
}

const OnePlatform = ({ locale }: Props) => {
    const isAr = locale === "ar";

    const features = [
        { icon: GraduationCap, title: isAr ? "تعليم أكاديمي" : "Academic Education" },
        { icon: MonitorPlay, title: isAr ? "دورات أونلاين" : "Online Courses" },
        { icon: Briefcase, title: isAr ? "تدريب مهني" : "Professional Training" },
        { icon: Wifi, title: isAr ? "تعليم عن بُعد" : "Remote Learning" },
        { icon: BookOpen, title: isAr ? "محتوى متخصص" : "Specialized Content" },
        { icon: UserRound, title: isAr ? "دروس فردية" : "One-on-One Lessons" },
    ];

    return (
        <section className="one-platform">
            <div className="container">
                <div className="section-header">
                    <h2>
                        {isAr ? "منصة واحدة … تناسب جميع الأغراض" : "One platform … suitable for all purposes"}
                    </h2>
                    <div className="title-line"></div>
                </div>

                <div className="features-grid">
                    {features.map((el, idx) => (
                        <div className="feature-card" key={idx}>
                            <div className="icon-box">
                                <el.icon size={32} />
                            </div>
                            <h4>{el.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OnePlatform;