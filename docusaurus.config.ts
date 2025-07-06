import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Apolo Dex Documentation',
  tagline: 'Trade Happy',
  favicon: 'img/favicon.ico',

  url: 'https://MockbaBot.github.io',
  baseUrl: '/',

  organizationName: 'Manual',
  projectName: 'Manual',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'tr', 'uk', 'vi', 'zh'],
    localeConfigs: {
      de: {
        label: 'Deutsch',
      },
      en: {
        label: 'English',
      },
      es: {
        label: 'Español',
      },
      fr: {
        label: 'Français',
      },
      it: {
        label: 'Italiano',
      },
      ja: {
        label: '日本語',
      },
      ko: {
        label: '한국어',
      },
      nl: {
        label: 'Nederlands',
      },
      pl: {
        label: 'Polski',
      },
      pt: {
        label: 'Português',
      },
      ru: {
        label: 'Русский',
      },
      tr: {
        label: 'Türkçe',
      },
      uk: {
        label: 'Українська',
      },
      vi: {
        label: 'Tiếng Việt',
      },
      zh: {
        label: '中文',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            undefined,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'ApoloDex Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'localeDropdown', // 🔥 Language switcher added here
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Indicators',
              to: '/docs/indicators',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/+qxi-EyCvGYFmYmNh',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}  Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
