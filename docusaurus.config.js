// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YourRouter',
  tagline: 'Your client-side router',
  url: 'https://ch3ber.github.io',
  baseUrl: '/yourRouter/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ch3ber', // Usually your GitHub org/user name.
  projectName: 'yourRouter', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: '2.0.5',
          versions: {
            current: {
              label: 'Canary 🚧',
              path: 'next',
              banner: 'unreleased'
            },
            '2.0.5': {
              label: '2.0.5',
            },
            '1.1.2': {
              label: '1.1.2',
              path: '1.1.2',
            }
          },
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ch3ber/yourRouter-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Your Router',
        hideOnScroll: true,
        logo: {
          alt: 'Your Router Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{ to: '/versions', label: 'All versions' }],
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'doc',
            docId: 'Introduction',
            position: 'left',
            label: 'Docs',
          },
          { href: 'https://ch3ber.github.io', label: 'Creator', position: 'left' },
          {
            href: 'https://github.com/ch3ber/yourRouter',
            label: 'GitHub',
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
                label: 'Quick Setup',
                to: '/docs/quick-setup',
              },
              {
                label: 'Get Started',
                to: '/docs/getting-started/installation'
              },
              {
                label: 'API',
                to: '/docs/category/api/addRoute',
              },
              {
                label: 'Examples',
                to: '/docs/category/examples/devstore',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/6tUajATUTU',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ch3ber_dev',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ch3ber/yourRouter',
              },
              {
                label: 'NPM',
                href: 'https://www.npmjs.com/package/yourrouter',
              },
            ],
          },
        ],
        logo: {
          alt: 'Eber Alejo @ch3ber Logo',
          src: 'img/ch3ber-logo.png',
          href: 'https://ch3ber.github.io',
          width: 250,
        },
        copyright: `ch3ber - Open Source Project.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
