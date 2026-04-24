export default function sitemap() {
    const locales = ['en', 'ar'];

    const pages = [
        '',
        '/about',
        '/plans'
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