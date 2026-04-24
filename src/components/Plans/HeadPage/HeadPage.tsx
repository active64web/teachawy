'use client';
import "./HeadPage.scss";

interface HeadPageProps {
    locale: string;
    title: string;
    subtitle: string;
}

const HeadPage = ({ locale, title, subtitle }: HeadPageProps) => {
    const isAr = locale === "ar";

    return (
        <section className="pricing-head">
            <div className="container">
                <span className="mini-title">
                    {isAr ? "تيتشاوي" : "Teachawy"}
                </span>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </section>
    );
};

export default HeadPage;