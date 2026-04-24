import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server';
import OnePlatform from "@/components/Home/OnePlatform/OnePlatform";
import WhatWeOffer from "@/components/Home/WhatWeOffer/WhatWeOffer";
import WhyChooseUs from "@/components/Home/WhyChooseUs/WhyChooseUs";
import Statistics from "@/components/Statistics/Statistics";
import Hero from '@/components/Home/Hero/Hero';
import Testimonials from '@/components/Home/Testimonials/Testimonials';
import CTA from '@/components/Home/CTA/CTA';
import FAQ from '@/components/Home/FAQ/FAQ';
import HowItWorks from '@/components/Home/HowItWorks/HowItWorks';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const isAr = locale === "ar";

    return {
        title: isAr
            ? 'تيتشاوي | منصة تعليمية لإدارة الدروس والطلاب'
            : 'Teachawy | Educational Platform for Managing Learning',

        description: isAr
            ? 'تيتشاوي منصة تعليمية تساعد المدرسين والأكاديميات على إنشاء وإدارة منصاتهم التعليمية بسهولة، متابعة الطلاب، وتنظيم المحتوى في مكان واحد.'
            : 'Teachawy is an educational platform that helps teachers and academies create and manage their learning platforms, track students, and organize content easily.',

        keywords: isAr
            ? [
                'منصة تعليمية',
                'منصة للمدرسين',
                'إدارة الطلاب',
                'منصة دروس أونلاين',
                'منصة تعليم إلكتروني',
                'تيتشاوي',
            ]
            : [
                'educational platform',
                'online learning platform',
                'teacher platform',
                'student management system',
                'e-learning platform',
                'Teachawy',
            ],
    }
}

export default async function Home() {
    const locale = await getLocale();

    return (
        <div className="home">
            <Hero locale={locale} />
            <OnePlatform locale={locale} />
            <WhatWeOffer locale={locale} />
            <Statistics locale={locale} />
            <WhyChooseUs locale={locale} />
            <HowItWorks locale={locale} />
            <Testimonials locale={locale} />
            <FAQ locale={locale} />
            <CTA locale={locale} />
        </div>
    );
}
