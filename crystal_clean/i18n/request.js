// i18n/request.js

import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Validate locale
  const validLocales = ['en', 'ro', 'ru'];
  const currentLocale = validLocales.includes(locale) ? locale : 'en';

  // Load messages
  let messages = {};
  try {
    messages = (await import(`../messages/${currentLocale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for ${currentLocale}:`, error);
  }

  return {
    locale: currentLocale,
    messages
  };
});