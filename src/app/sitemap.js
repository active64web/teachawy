export default function sitemap() {
    const locales = ['en', 'ar'];

    const pages = [
        '',
        '/about',
        '/how-it-works',
        '/faq',
        '/pricing',
    ];

    const urls = [];

    locales.forEach((locale) => {
        pages.forEach((page) => {
            urls.push({
                url: `https://teachawy.com/${locale}${page}`,
                lastModified: new Date(),
            });
        });
    });

    return urls;
}