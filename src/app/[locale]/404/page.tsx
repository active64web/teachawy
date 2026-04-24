import NotFoundContent from '@/components/NotFoundContent/NotFoundContent';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'NotFound' });
    return {
        title: `${t('seoTitle')} | Teachawy`,
        description: t('description'),
        robots: { index: false, follow: true }
    };
}

export default function Page() {
    return <NotFoundContent />;
}