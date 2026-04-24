import { getTranslations, getLocale } from 'next-intl/server';
import "./Loading.scss";

export default async function Loading() {
    const locale = await getLocale();
    const t = await getTranslations({ locale, namespace: 'Loading' });

    return (
        <div className="loading-container">
            <style dangerouslySetInnerHTML={{
                __html: `
                    html, body { 
                        overflow: hidden !important; 
                        height: 100% !important;
                        margin: 0 !important;
                    }
                `
            }} />

            <div className="loader-wrapper">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>

                <div className="logo-center">
                    <span className="dot"></span>
                    <div className="brand-text">T</div>
                </div>
            </div>
            <p className="loading-text">{t('text')}</p>
        </div>
    );
}