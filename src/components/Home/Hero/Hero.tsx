'use client';
import "./Hero.scss";
import dynamic from 'next/dynamic';
import { Link } from "@/i18n/navigation";
import { Sparkles } from "lucide-react";
import HeroVisual from "./HeroVisual/HeroVisual";

const HeroVisualCanvas = dynamic(() => import('./HeroVisual'), {
    ssr: false,
    loading: () => <div className="hero-visual-canvas" />
});

interface Props {
    locale: string
}

const Hero = ({ locale }: Props) => {
    const isAr = locale === "ar";

    return (
        <section className="hero">
            {/* الخلفية التفاعلية Three.js */}
            <HeroVisualCanvas />

            <div className="container">
                <div className="content">
                    <span className="badge">
                        <Sparkles size={16} />
                        {isAr ? "منصة التعليم الذكية" : "Smart Education Platform"}
                    </span>

                    <h1>
                        {isAr ? "مع تيتشاوي" : "With Teachawy"}
                        <span className="dot">.</span>
                    </h1>

                    <h2>
                        {isAr
                            ? "أنشئ منصتك التعليمية … وابدأ التدريس بطريقتك"
                            : "Create your educational platform and start teaching your way"}
                    </h2>

                    <p>
                        {isAr
                            ? "حوّل خبرتك التعليمية إلى منصة احترافية خلال دقائق. أنشئ موقعك، أضف دوراتك، وابدأ الوصول لطلابك بدون تعقيد تقني."
                            : "Turn your teaching expertise into a professional platform in minutes. Create your site, add courses, and reach students with no technical hassle."}
                    </p>

                    <div className="hero-links">
                        <Link href="/register" className="btn-primary">
                            {isAr ? "ابدأ الآن" : "Start Now"}
                        </Link>
                        <Link href="/how-it-works" className="btn-secondary">
                            {isAr ? "كيف تعمل المنصة؟" : "How It Works?"}
                        </Link>
                    </div>
                </div>

                <div className="visual-preview">
                    <HeroVisual />
                </div>
            </div>
        </section>
    );
}

export default Hero;