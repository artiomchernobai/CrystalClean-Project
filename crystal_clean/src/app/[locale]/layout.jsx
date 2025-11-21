import ClientWrapper from './ClientWrapper';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'ro', 'ru'];

export default async function LocaleLayout({ children, params }) {
  const locale = params.locale;

  if (!locales.includes(locale)) notFound();

  const messages = await getMessages({ locale });

  return (
    <ClientWrapper locale={locale} messages={messages}>
      {children}
    </ClientWrapper>
  );
}
