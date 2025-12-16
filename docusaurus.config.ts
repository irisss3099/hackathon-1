import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Robotics',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',


  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',

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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        
        blog: false, // Blog disabled
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
  navbar: {
        title: 'Physical AI & Robotics',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
         items: [
              {
                type: 'dropdown',
                label: '📖 Book',
                position: 'left',
                items: [
                  {
                    label: '✨ Welcome to a New Era of Intelligence',
                    to: '/docs/intro',
                  },
                  {
                    label: '🧠 Part 1: The Robotic Nervous System',
                    to: '/docs/physical-ai-and-robotics/part-1-ros/chapter-1-middleware',
                  },
                  {
                    label: '🎮 Part 2: The Digital Twin',
                    to: '/docs/physical-ai-and-robotics/part-2-digital-twin/chapter-5-simulating-world',
                  },
                  {
                    label: '🚀 Part 3: The AI-Robot Brain',
                    to: '/docs/physical-ai-and-robotics/part-3-ai-brain/chapter-9-advanced-perception',
                  },
                  {
                    label: '🗣️ Part 4: Vision-Language-Action',
                    to: '/docs/physical-ai-and-robotics/part-4-vla/chapter-13-voice-and-mind',
                  },
                ],
              },
          {
                href: 'https://github.com/panaverse/Physical-AI-and-Robotics-Book',
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
              label: 'Summary',
              to: '/summary',
            },
            {
              label: 'Part 1: Robotic Nervous System',
              to: '/docs/physical-ai-and-robotics/part-1-ros/chapter-1-middleware',
            },
            {
              label: 'Part 2: Digital Twin',
              to: '/docs/physical-ai-and-robotics/part-2-digital-twin/chapter-5-simulating-world',
            },
            {
              label: 'Part 3: AI-Robot Brain',
              to: '/docs/physical-ai-and-robotics/part-3-ai-brain/chapter-9-advanced-perception',
            },
            {
              label: 'Part 4: Vision-Language-Action',
              to: '/docs/physical-ai-and-robotics/part-4-vla/chapter-13-voice-and-mind',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus', // Keeping the example GitHub link
            },
          ],
        },
        {
          title: 'More',
          items: [
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Robotics... Built by Sabila Aleem.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
