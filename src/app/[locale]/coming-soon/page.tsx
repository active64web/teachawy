import "./ComingSoon.scss";

export const metadata = {
    title: "تيتشاوي | قريبا",
    description: "منصة تيتشاوي للتعليم الاونلاين هتكون متاحة قريبًا",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ComingSoon() {
    return (
        <div className="coming-soon">
            <div className="content">
                <h1>🚀 قريباً</h1>

                <p>
                    منصة <span>تيتشاوي</span> للتعليم الاونلاين هتكون متاحة قريبًا
                </p>
            </div>
        </div>
    );
}