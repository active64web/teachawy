import { Almarai, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "@/styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FloatingButtons from "@/components/FloatingButtons/FloatingButtons";

const arabicFont = Almarai({
    subsets: ["arabic"],
    weight: ["300", "400", "700"],
    variable: "--font-ar",
});

const englishFont = Inter({
    subsets: ["latin"],
    variable: "--font-en",
    display: 'swap',
});

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html
            lang={locale}
            dir={locale === "ar" ? "rtl" : "ltr"}
            className={`${arabicFont.variable} ${englishFont.variable}`}
        >
            <body>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <Header />
                    {children}
                    <FloatingButtons />
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}