import { defineConfig } from '@rspress/core';

export default defineConfig({
  title: 'Web Infra',
  siteOrigin: 'https://webinfra.org',
  icon: '/favicon.png',
  logo: '/favicon.png',
  route: { cleanUrls: true },
  search: false,
  themeConfig: {
    darkMode: 'force-dark',
    socialLinks: [
      { icon: 'github', content: 'https://github.com/web-infra-dev' },
    ],
  },
  head: [
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-SKTXMYS6VT',
      },
    ],
    '<script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)} gtag("js", new Date()); gtag("config", "G-SKTXMYS6VT");</script>',
  ],
});
