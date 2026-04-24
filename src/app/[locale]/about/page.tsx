import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import Welcome from "@/components/About/Welcome/Welcome";
import IntegratedSolution from "../../../components/About/IntegratedSolution/IntegratedSolution";
import Philosophy from "@/components/About/Philosophy/Philosophy";
import AboutCta from "@/components/About/AboutCta/AboutCta";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const isAr = locale === "ar";

    return {
        title: isAr
            ? "من نحن | تيتشاوي"
            : "About Us | Teachawy",

        description: isAr
            ? "تعرّف على تيتشاوي، المنصة التعليمية التي تهدف إلى تمكين المدرسين والأكاديميات من إنشاء وإدارة منصاتهم التعليمية باحترافية وسهولة."
            : "Learn more about Teachawy, the educational platform dedicated to empowering teachers and academies to build and manage their learning platforms professionally and with ease.",

        keywords: isAr
            ? [
                "من نحن تيتشاوي",
                "عن تيتشاوي",
                "منصة تعليمية",
                "منصة للمدرسين",
                "إدارة التعليم",
                "تيتشاوي",
            ]
            : [
                "about Teachawy",
                "Teachawy platform",
                "educational platform",
                "teacher platform",
                "e-learning solution",
                "Teachawy",
            ],
    };
}

export default async function About() {
    const locale = await getLocale();

    return (
        <div className="home">
            <Welcome locale={locale} />
            <IntegratedSolution locale={locale} />
            <Philosophy locale={locale} />
            <AboutCta locale={locale} />
        </div>
    );
}