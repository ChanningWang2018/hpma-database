// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hpma Database",
  tagline: "“Help will always be given at Hogwarts to those who ask for it.”",
  favicon: "img/favicon.ico",
  trailingSlash: false,

  // Set the production url of your site here
  url:
    process.env.PLATFORM === "netlify"
      ? "https://hpma-database.netlify.app"
      : "https://ChanningWang2018.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.PLATFORM === "netlify" ? "/" : "/hpma-database/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "HPMA-DATABASE", // Usually your GitHub org/user name.
  projectName: "hpma-database", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/ChanningWang2018/hpma-database/tree/main",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/ChanningWang2018/hpma-databasen/tree/main",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Hpma Database",
        logo: {
          alt: "Hpma Database Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "spellbookSidebar",
            position: "left",
            label: "Spellbook",
          },
          {
            type: "docSidebar",
            sidebarId: "careerResearchSidebar",
            position: "left",
            label: "CareerResearch",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/ChanningWang2018/hpma-database",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Spellbook",
                to: "/docs/spellbook/cards",
              },
              {
                label: "CareerResearch",
                to: "/docs/career-research/intro",
              },
            ],
          },
          // {
          //   title: "Community",
          //   items: [

          //     {
          //       label: "X",
          //       href: "https://x.com/docusaurus",
          //     },
          //   ],
          // },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/ChanningWang2018/hpma-database",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hpma Database. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
