import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();

    const isMaintenance = true;

    // سيب صفحة coming-soon تعدي
    if (url.pathname.includes('/coming-soon')) {
        return intlMiddleware(request);
    }

    // لو الموقع مقفول → حول
    if (isMaintenance) {
        url.pathname = '/coming-soon';
        return NextResponse.redirect(url);
    }

    // غير كده شغل middleware بتاع اللغة
    return intlMiddleware(request);
}

export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};

// import createMiddleware from 'next-intl/middleware';
// import { routing } from './i18n/routing';

// export default createMiddleware(routing);

// export const config = {
//     matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
// };