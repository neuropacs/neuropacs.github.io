// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "neuropacs™ Integration Guide",
  tagline:
    "Connect seamlessly to our advanced diagnostic capabilities through multiple dynamic integration options.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://neuropacs.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/neuropacs-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "neuropacs", // Usually your GitHub org/user name.
  projectName: "neuropacs.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js"
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn"
        },
        theme: {
          customCss: "./src/css/custom.css"
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "neuropacs™ Integration Guide",
        logo: {
          alt: "neuropacs Logo",
          src: "img/logo.svg"
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Overview"
          },
          {
            to: "/products",
            label: "Products",
            position: "left"
          },
          { to: "/blog", label: "Blog", position: "left" }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Intergration Overview",
                to: "/docs/intro"
              },
              {
                label: "Input Specifications",
                to: "/docs/input-specifications"
              },
              {
                label: "DICOM Ingestion Methods",
                to: "/docs/category/dicom-ingestion-methods"
              },
              {
                label: "Report Delivery Methods",
                to: "/docs/category/report-delivery-methods"
              },
              {
                label: "Security & Regulatory Compliance",
                to: "/docs/security-&-regulatory-compliance"
              }
            ]
          },
          {
            title: "Links",
            items: [
              {
                label: "Official Website",
                href: "https://neuropacs.com/"
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/neuropacs/posts/?feedView=all"
              },
              {
                label: "JAMA",
                href: "https://jamanetwork.com/journals/jamaneurology/fullarticle/2831631"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Products",
                to: "/products"
              },
              {
                label: "Blog",
                to: "/blog"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} neuropacs™`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    })
};

export default config;
