// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Sheepstar Docs',
    tagline: 'How does our global bot work?',
    favicon: 'img/favicon.ico',
    url: 'https://docs.sheepstar.xyz',
    baseUrl: '/',
    organizationName: 'SheepstarStudio',
    projectName: 'Docs',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/SheepstarStudio/Docs/edit/main/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: 'img/social.png',
            navbar: {
                title: 'Sheepstar',
                logo: {
                    alt: 'Logo',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://sheepstar.xyz',
                        label: 'Website',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Invite',
                                href: 'https://invite.sheepstar.xyz/',
                            },
                            {
                                label: 'Discord',
                                href: 'https://support.sheepstar.xyz/',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/SheepstarStudio',
                            },
                        ],
                    },
                    {
                        title: 'Legal',
                        items: [
                            {
                                label: 'Imprint',
                                href: 'https://sheepstar.xyz/imprint',
                            },
                            {
                                label: 'Privacy',
                                href: 'https://sheepstar.xyz/privacy',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Sheepstar`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
