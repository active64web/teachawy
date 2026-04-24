'use client';

import "./NotFoundContent.scss";
import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/navigation";
import { Home, AlertCircle } from 'lucide-react';

const NotFoundContent = () => {
    const t = useTranslations('NotFound');

    return (
        <div className="not-found-wrapper">
            <div className="container">
                <div className="error-visual">
                    <div className="number-3d">
                        <span>4</span>
                        <div className="circle-icon">
                            <AlertCircle size={100} strokeWidth={1} />
                        </div>
                        <span>4</span>
                    </div>
                    <div className="shadow-3d"></div>
                </div>

                <div className="error-text">
                    <h1>{t('title')}</h1>
                    <p>{t('description')}</p>

                    <div className="actions">
                        <Link href="/" className="btn-home">
                            <Home size={20} />
                            {t('button')}
                        </Link>
                    </div>
                </div>
            </div>

            {/* عناصر ديكورية خلفية */}
            <div className="decorative-blobs">
                <div className="blob blob-main"></div>
                <div className="blob blob-sub"></div>
            </div>
        </div>
    );
};

export default NotFoundContent;