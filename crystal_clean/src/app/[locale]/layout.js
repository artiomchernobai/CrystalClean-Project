// app/[locale]/layout.js
'use client';
import { NextIntlClientProvider } from 'next-intl';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LocaleLayout({ children }) {
  const params = useParams();
  const locale = params.locale;
  const [messages, setMessages] = useState({});
  
  const validLocales = ['en', 'ro', 'ru'];
  const currentLocale = validLocales.includes(locale) ? locale : 'en';

  useEffect(() => {
    async function loadMessages() {
      try {
        const response = await fetch(`/api/messages?locale=${currentLocale}`);
        const messagesData = await response.json();
        setMessages(messagesData);
      } catch (error) {
        console.error('Failed to load messages:', error);
      }
    }
    
    loadMessages();
  }, [currentLocale]);

  return (
    <html>
      <body>
        <NextIntlClientProvider 
          locale={currentLocale} 
          messages={messages}
          onError={() => {}}
        >
          <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
            Locale: {currentLocale}
          </nav>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}