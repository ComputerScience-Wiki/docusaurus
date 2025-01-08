import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ComputerScience',
  tagline: '',
  favicon: 'img/favicon.ico',
  url: 'https://github.com',
  baseUrl: '/docusaurus/',
  organizationName: 'ComputerScience-wiki',
  projectName: 'docusaurus',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      hideOnScroll: true,
      title: 'ComputerScience-Wiki',
      logo: {
        alt: 'ComputerScience-Wiki Logo',
        src: 'img/logo.png',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'bigdata_databases',
          position: 'left',
          label: 'Big Data & Databases',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cloud_infrastructure',
          position: 'left',
          label: 'Cloud & IT Infrastructure',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cyber_security',
          position: 'left',
          label: 'Cyber Security',
        },
        {
          type: 'docSidebar',
          sidebarId: 'datascience_analytics',
          position: 'left',
          label: 'Data Science & Analytics',
        },
        {
          type: 'docSidebar',
          sidebarId: 'development',
          position: 'left',
          label: 'Development',
        },
        {
          href: 'https://github.com/ComputerScience-Wiki/computerscience-wiki.github.io',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wiki',
          items: [
            {
              label: 'Big Data & Databases',
              to: '/docs/bigdata-databases/introduction',
            },
            {
              label: 'Cloud & IT Infrastructure',
              to: '/docs/cloud-infrastructure/introduction',
            },
            {
              label: 'Cyber Security',
              to: '/docs/cyber-security/introduction',
            },
            {
              label: 'Data Science & Analytics',
              to: '/docs/datascience-analytics/introduction',
            },
            {
              label: 'Development',
              to: '/docs/development/introduction',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ComputerScience-Wiki/computerscience-wiki.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ComputerScience-Wiki, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
