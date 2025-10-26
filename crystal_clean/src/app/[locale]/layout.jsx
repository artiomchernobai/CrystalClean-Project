import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';

const locales = ['en', 'ro', 'ru'];

export default async function LocaleLayout({children, params}) {
  const locale = params.locale;

  if (!locales.includes(locale)) notFound();

  const messages = await getMessages({ locale }); // ✅ загружаем переводы
  console.log('LocaleLayout locale param:', locale);
  console.log('LocaleLayout messages:', messages);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}