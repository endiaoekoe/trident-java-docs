// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Trident-Java',
  tagline: '',
  favicon: 'img/tron-small-icon_red.png',

  // Set the production url of your site here
  url: 'https://trident-sdk.developers.tron.network/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tronprotocol', // Usually your GitHub org/user name.
  projectName: 'trident-java-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
      // Replace with your project's social card
      image: 'img/tron-small-icon_red.png',
      navbar: {
        title: 'Trident-Java',
        logo: {
          alt: 'Tron Logo',
          src: 'img/tron-small-icon_red.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',

            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/tronprotocol/trident',
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
                label: 'Documentation',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [

              {
                label: 'Discord',
                href: 'https://discord.gg/cGKSsRVCGm',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/TronOfficialDevelopersGroupEn',
              },
              {
                label: 'Telegram Chinese',
                href: 'https://t.me/TronOfficialTechSupport2',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tronprotocol/trident',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Trident-sdk-docs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
