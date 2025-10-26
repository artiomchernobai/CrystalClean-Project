'use client'
import { notFound } from 'next/navigation';
import GreetingMessage from "@/components/GreetingMessage";
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default  function DefPage() {
  const { locale } = useParams();
  console.log('Home locale param:', locale);
  const validLocales = ['en', 'ro', 'ru'];
  const t = useTranslations('Placeholder');

  return (
    <div>
      <GreetingMessage />
      <p>{t('loading')}</p>
    </div>
  );
}
