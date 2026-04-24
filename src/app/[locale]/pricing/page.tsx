import "./Pricing.scss";
import type { Metadata } from 'next'
import { getLocale } from "next-intl/server";
import HeadPage from "@/components/HeadPage/HeadPage";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const isAr = locale === "ar";

    return {
        title: isAr
            ? 'أسعار تيتشاوي | باقات المنصة التعليمية'
            : 'Teachawy Pricing | Plans & Packages',

        description: isAr
            ? 'اكتشف باقات تيتشاوي التعليمية المصممة للمدرسين والأكاديميات. اختر الخطة المناسبة لك وابدأ في إدارة طلابك ودروسك بسهولة واحترافية.'
            : 'Explore Teachawy pricing plans designed for teachers and academies. Choose the right plan and start managing your students and lessons بسهولة and professionally.',

        keywords: isAr
            ? [
                'أسعار تيتشاوي',
                'باقات تعليمية',
                'اشتراك منصة تعليمية',
                'خطط الأسعار',
                'منصة للمدرسين',
                'إدارة الطلاب',
                'تيتشاوي',
            ]
            : [
                'Teachawy pricing',
                'education plans',
                'subscription plans',
                'online learning pricing',
                'teacher platform plans',
                'student management pricing',
                'Teachawy',
            ],
    };
}

export default async function Pricing() {
    const locale = await getLocale();
    const isAr = locale === "ar";

    const packages = [
        {
            id: 1,
            title: isAr ? "مبتدئ" : "Beginner",
            description: isAr
                ? "مناسبة للمدرسين اللي لسه بيبدأوا التدريس أونلاين وعايزين منصة بسيطة تجمع محتواهم وتساعدهم ينطلقوا بسهولة."
                : "Suitable for teachers who are just starting to teach online and want a simple platform to gather their content and help them get started easily.",
            price: isAr ? "1000 ج.م / شهر" : "1000 EGP / month",
            features: [
                { id: 1, title: isAr ? "عدد 50 طالب" : "Up to 50 students" },
                { id: 2, title: isAr ? "منصة تعليمية" : "Educational platform" },
                { id: 3, title: isAr ? "لوحة تحكم لادراة دوراتك و محتواك" : "Dashboard to manage your courses and content" },
                { id: 4, title: isAr ? "دعم فنى" : "Technical support" },
            ],
            offer: isAr
                ? "احصل على 12 شهر بسعر 10000 ج.م فقط"
                : "Get 12 months for only 10,000 EGP",
            star: false
        },
        {
            id: 2,
            title: isAr ? "محترف" : "Professional",
            description: isAr
                ? "مناسبة للمدرسين اللي عندهم محتوى جاهز وعايزين منصة منظمة بهوية واضحة وتجربة احترافية لطلابهم."
                : "Suitable for teachers who already have content and want a well-organized platform with a clear identity and a professional experience for their students.",
            price: isAr ? "2000 ج.م / شهر" : "2000 EGP / month",
            features: [
                { id: 1, title: isAr ? "عدد 100 طالب" : "Up to 100 students" },
                { id: 2, title: isAr ? "منصة تعليمية باسمك" : "Branded educational platform" },
                { id: 3, title: isAr ? "لوحة تحكم لادراة دوراتك و محتواك" : "Dashboard to manage your courses and content" },
                { id: 4, title: isAr ? "تخصيص الهوية ( اسم/ نبذة عنك / صورة / اللوان )" : "Custom branding (name, bio, image, colors)" },
                { id: 5, title: isAr ? "دعم فنى" : "Technical support" },
            ],
            offer: isAr
                ? "احصل على 12 شهر بسعر 22000 ج.م فقط"
                : "Get 12 months for only 22,000 EGP",
            star: true
        },
        {
            id: 3,
            title: isAr ? "متقدم" : "Advanced",
            description: isAr
                ? "مناسبة للمدرسين اللي بيقدّموا محتوى تعليمي بشكل مستمر وعايزين منصة متكاملة وقابلة للنمو على المدى الطويل."
                : "Suitable for teachers who continuously provide educational content and need a comprehensive platform that can scale over time.",
            price: isAr ? "4500 ج.م / شهر" : "4500 EGP / month",
            features: [
                { id: 1, title: isAr ? "عدد 250 طالب" : "Up to 250 students" },
                { id: 2, title: isAr ? "منصة تعليمية باسمك" : "Branded educational platform" },
                { id: 3, title: isAr ? "لوحة تحكم لادراة دوراتك و محتواك" : "Dashboard to manage your courses and content" },
                { id: 4, title: isAr ? "تخصيص الهوية ( اسم/ نبذة عنك / صورة / اللوان )" : "Custom branding (name, bio, image, colors)" },
                { id: 5, title: isAr ? "صفحة من انا و بها معرض صور خاص" : "About page with a custom gallery" },
                { id: 6, title: isAr ? "دعم فنى" : "Technical support" },
            ],
            offer: isAr
                ? "احصل على 12 شهر بسعر 47000 ج.م فقط"
                : "Get 12 months for only 47,000 EGP",
            star: false
        },
    ];

    return (
        <div className="pricing">
            <HeadPage>
                <h2>
                    {isAr
                        ? "اختر الباقة المناسبة لك"
                        : "Choose the right plan for you"}
                </h2>

                <p>
                    {isAr
                        ? "من خلال لوحة التحكم، يمكنك تعديل اسم المنصة، والألوان، والصور، وكتابة نبذة تعريفية عنك، لتظهر منصتك بالشكل الذي يعكس هويتك التعليمية."
                        : "Through the dashboard, you can customize your platform name, colors, images, and write a description to reflect your educational identity."}
                </p>
            </HeadPage>

            <div className="packages">
                <div className="container">
                    {packages.map(el => (
                        <div
                            key={el.id}
                            className={`package ${el.star ? "top" : ""}`}
                        >
                            {el.star &&
                                <p className="star">
                                    {isAr ? "الاكثر شيوعاً" : "Most Popular"}
                                </p>
                            }
                            <h3>{el.title}</h3>
                            <p className="desc">{el.description}</p>
                            <p className="price">{el.price}</p>

                            <hr />

                            <div className="features">
                                {el.features.map(el => (
                                    <p key={el.id}>- {el.title}</p>
                                ))}
                            </div>

                            <p className="offer">{el.offer}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="cta-pricing">
                <div className="container">
                    <h2>
                        {locale === "ar"
                            ? "مش متأكد أنهي باقة مناسبة ليك؟"
                            : "Not sure which plan is right for you?"}
                    </h2>

                    <p>
                        {locale === "ar"
                            ? "تواصل معنا و هنساعدك في اختيار الباقة الأنسب لاحتياجاتك التعليمية."
                            : "Contact us and we’ll help you choose the best plan for your educational needs."}
                    </p>

                    <a href="#">
                        {locale === "ar"
                            ? "تواصل معنا الان"
                            : "Contact us now"}
                    </a>
                </div>
            </div>
        </div>
    );
}