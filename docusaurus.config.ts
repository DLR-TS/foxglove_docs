import type { Options as PluginClientRedirectsOptions } from "@docusaurus/plugin-client-redirects";
import type * as PresetClassic from "@docusaurus/preset-classic";
import { Config } from "@docusaurus/types";
import extensionApiDocsPlugin from "@foxglove/plugin-extension-api-docs";
import foxgloveSchemasPlugin, {
  generateFoxgloveSchemaRedirects,
} from "@foxglove/plugin-foxglove-schemas";
import posthogPageviewsPlugin from "@foxglove/plugin-posthog-pageviews";
import { config as dotenvConfig } from "dotenv";
import { themes } from "prism-react-renderer";
import type { PresetOptions as RedocusaurusPresetOptions } from "redocusaurus";
import "redocusaurus";

dotenvConfig();

export default {
  title: "Foxglove | Docs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.foxglove.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  markdown: {
    // Use CommonMark for .md and MDX for .mdx
    format: "detect",
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./navigation.js"),
          editUrl: "https://github.com/foxglove/docs/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        blog: {
          path: "changelog",
          routeBasePath: "changelog",
          blogTitle: "Changelog",
          blogDescription: "Changelog | Foxglove",
          blogSidebarTitle: "Recent releases",
          showReadingTime: false,
        },
      } satisfies PresetClassic.Options,
    ],
    [
      "redocusaurus",
      {
        config: "./api-docs/redocly.yaml",
        specs: [
          {
            spec: "./api-docs/specs/v1.yaml",
            route: "/api/",
          },
        ],
        theme: {
          primaryColor: "#9480ed",
        },
      } satisfies RedocusaurusPresetOptions,
    ],
  ],

  plugins: [
    extensionApiDocsPlugin,
    foxgloveSchemasPlugin,
    process.env.POSTHOG_KEY && [posthogPageviewsPlugin, { apiKey: process.env.POSTHOG_KEY }],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          ...generateFoxgloveSchemaRedirects(),
          { from: "/docs/release-notes", to: "/changelog" },
        ],
      } satisfies PluginClientRedirectsOptions,
    ],
  ].filter(Boolean),

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: undefined,
      logo: {
        alt: "Foxglove",
        src: "img/foxglove-typemark-dark.svg",
        href: "/",
        target: "_self",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          to: "/api",
          label: "API Reference",
          position: "left",
        },
        {
          to: "/changelog",
          label: "Changelog",
          position: "left",
        },
        {
          href: "https://foxglove.dev/",
          label: "Back to Foxglove",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Foxglove",
          items: [
            { label: "Docs", to: "/" },
            { label: "API reference", to: "/api" },
            { label: "Changelog", to: "/changelog" },
          ],
        },
        {
          title: "Community",
          items: [
            { label: "Slack", href: "https://foxglove.dev/slack" },
            { label: "Twitter", href: "https://twitter.com/foxglovedev" },
            { label: "GitHub", href: "https://github.com/foxglove" },
          ],
        },
      ],
      copyright: `Copyright © Foxglove`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ["json"],
    },
    algolia:
      process.env.ALGOLIA_APP_ID && process.env.ALGOLIA_API_KEY
        ? {
            appId: process.env.ALGOLIA_APP_ID,
            apiKey: process.env.ALGOLIA_API_KEY,
            indexName: "foxglove-pages",
            contextualSearch: true,
            searchParameters: {}, // optional
            searchPagePath: "search", // optional; false to disable
          }
        : undefined,
  } satisfies PresetClassic.ThemeConfig,
} satisfies Config;
