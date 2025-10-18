// components/GreetingMessage.js
'use client';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';

export default function GreetingMessage() {
    const locale = useLocale();
    const t = useTranslations('GreetingMessage');

    return (
        <div style={{ padding: '2rem' }}>
            <h1>{t('bigHello')} {locale}</h1>
            <p>{t('smallerHello')} {locale}</p>
        </div>
    );
}