'use client'
import GreetingMessage from "@/components/GreetingMessage";
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';

export default function DefPage() {
  const { locale } = useParams();
  console.log('Home locale param:', locale);
  const validLocales = ['en', 'ro', 'ru'];
  const t = useTranslations('Placeholder');

  return (
    <div>
      <Header />
      <h1>about page</h1>
      <GreetingMessage />
      <p>{t('loading')}</p>
    </div>
  );
}
