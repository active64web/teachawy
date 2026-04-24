import HeadPage from '@/components/Plans/HeadPage/HeadPage';
import PricingFAQ from '@/components/Plans/PricingFAQ/PricingFAQ';
import PricingGrid from '@/components/Plans/PricingGrid/PricingGrid';
import type { Metadata } from 'next';
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const isAr = locale === "ar";

    const title = isAr ? 'خطط الأسعار | تيتشاوي' : 'Pricing Plans | Teachawy';
    const description = isAr
        ? 'اكتشف باقات تيتشاوي التعليمية المصممة للمدرسين والمؤسسات. حماية فيديوهات، إدارة طلاب، واختبارات في مكان واحد.'
        : 'Explore Teachawy plans for teachers and institutions. Video protection, student management, and quizzes all in one place.';

    return {
        title,
        description,
        keywords: isAr
            ? ['أسعار تيتشاوي', 'باقات تعليمية', 'منصة مدرسين', 'حماية Bunny.net', 'إدارة فصول']
            : ['Teachawy pricing', 'education plans', 'teacher platform', 'Bunny.net protection'],
        openGraph: {
            title,
            description,
            type: 'website',
            locale: locale,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        }
    };
}

export default async function Plans() {
    const locale = await getLocale();
    const isAr = locale === "ar";

    return (
        <main className="pricing-page">
            <HeadPage
                locale={locale}
                title={isAr ? "خطط الأسعار" : "Pricing Plans"}
                subtitle={isAr
                    ? "اختر الحل الأمثل لنمو مؤسستك التعليمية، نوفر لك القوة التقنية والحماية التي تستحقها."
                    : "Choose the perfect solution for your educational growth. We provide the tech power and protection you deserve."}
            />

            <PricingGrid locale={locale} />
            <PricingFAQ locale={locale} />
        </main>
    );
}