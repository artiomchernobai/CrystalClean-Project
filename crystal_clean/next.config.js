const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin({
  locales: ['en', 'ro', 'ru'],
  defaultLocale: 'en'
});

module.exports = withNextIntl({
  reactStrictMode: true
});