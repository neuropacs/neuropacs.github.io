// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Neuropacs™ Documentation",
  tagline:
    "Explore Neuropacs™ product suite, technical documentation, integration options, and blog.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://neuropacs.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "neuropacs", // Usually your GitHub org/user name.
  projectName: "neuropacs.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "ignore",
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
      image: "img/neuropacs_wp_logo_flat.png",
      navbar: {
        title: "Neuropacs™ Documentation",
        logo: {
          alt: "neuropacs Logo",
          src: "img/logo.svg"
        },
        items: [
          { to: "/docs/", label: "Overview", position: "left" },
          { to: "/docs/integrations", label: "Integrations", position: "left" },
          {
            to: "/docs/specifications",
            label: "Specifications",
            position: "left"
          },
          { to: "/docs/security", label: "Security", position: "left" },
          { to: "/products", label: "Products", position: "left" },
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
                label: "Overview",
                to: "/docs/"
              },
              {
                label: "Integrations",
                to: "/docs/integrations"
              },
              {
                label: "Specifications",
                to: "/docs/specifications"
              },
              {
                label: "Security & Compliance",
                to: "/docs/security"
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
                label: "Web Portal",
                href: "https://d1nxuh43hp41jj.cloudfront.net/web-portal/"
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/neuropacs/posts/?feedView=all"
              },
              {
                label: "JAMA Publication",
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
        copyright: `Copyright © ${new Date().getFullYear()} Neuropacs™`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    })
};

export default config;
