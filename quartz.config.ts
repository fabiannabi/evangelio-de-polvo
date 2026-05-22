import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "El Evangelio de Polvo",
    pageTitleSuffix: " — Archivo",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "es-ES",
    baseUrl: "evangelio-de-polvo.example",
    ignorePatterns: ["private", "templates", ".obsidian", "_apocrifos"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "IM Fell English",
        body: "EB Garamond",
        code: "Special Elite",
      },
      colors: {
        lightMode: {
          light: "#E8DCC4",
          lightgray: "#D4C29A",
          gray: "#8A7558",
          darkgray: "#6B4F35",
          dark: "#3D2817",
          secondary: "#8B2C0F",
          tertiary: "#5C4A2E",
          highlight: "rgba(140, 100, 60, 0.12)",
          textHighlight: "rgba(139, 44, 15, 0.2)",
        },
        darkMode: {
          light: "#E8DCC4",
          lightgray: "#D4C29A",
          gray: "#8A7558",
          darkgray: "#6B4F35",
          dark: "#3D2817",
          secondary: "#8B2C0F",
          tertiary: "#5C4A2E",
          highlight: "rgba(140, 100, 60, 0.12)",
          textHighlight: "rgba(139, 44, 15, 0.2)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
