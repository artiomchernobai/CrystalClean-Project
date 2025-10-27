'use client';

import mainTheme from '../../../public/themes/mainTheme';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';


export default function ClientWrapper({ locale, messages, children }) {
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider theme={mainTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextIntlClientProvider>
    );
}
