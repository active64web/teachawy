'use client';
import "./Statistics.scss";
import {
    LayoutDashboard,
    Users,
    BookOpen,
    TrendingUp,
} from 'lucide-react';

interface Props {
    locale: string
}

const Statistics = ({ locale }: Props) => {
    const isAr = locale === "ar";

    const statsData = [
        {
            id: 1,
            icon: LayoutDashboard,
            title: isAr ? "منصات تعليمية" : "Educational Platforms",
            desc: isAr
                ? "عدد متنامي من المنصات التعليمية التي تعتمد على تيتشاوي."
                : "A growing number of educational platforms relying on Teachawy.",
        },
        {
            id: 2,
            icon: Users,
            title: isAr ? "طلاب نشطون" : "Active Students",
            desc: isAr
                ? "طلاب وأولياء أمور يستخدمون المنصة يوميًا للتعلم والمتابعة."
                : "Students and parents use the platform daily for learning and tracking.",
        },
        {
            id: 3,
            icon: BookOpen,
            title: isAr ? "محتوى تعليمي" : "Educational Content",
            desc: isAr
                ? "دروس وكورسات يتم إضافتها وتحديثها باستمرار."
                : "Lessons and courses are added and updated continuously.",
        },
        {
            id: 4,
            icon: TrendingUp,
            title: isAr ? "توسع مستمر" : "Continuous Expansion",
            desc: isAr
                ? "المنصة تنمو وتتطور بشكل مستمر لتواكب احتياجات التعليم."
                : "The platform keeps growing and evolving to meet educational needs.",
        },
    ];

    return (
        <section className="statistics">
            <div className="container">
                <div className="stats-grid">
                    {statsData.map(item => {
                        const Icon = item.icon;
                        return (
                            <div key={item.id} className="stat-card">
                                <div className="stat-icon">
                                    <Icon size={32} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Statistics;