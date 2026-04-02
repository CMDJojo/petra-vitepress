import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import type { VitePressSidebarOptions } from "vitepress-sidebar/types";

const sidebarConfig: VitePressSidebarOptions = {
  excludeByGlobPattern: ["public", "Publications"],
  documentRootPath: "content",
  useFolderLinkFromIndexFile: true,
  excludeFilesByFrontmatterFieldName: "exclude",
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PETRA",
  description: "The home of the PETRA group",
  lang: "en-US",
  srcDir: "content",
  srcExclude: ["README.md"],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Research projects", link: "/Research%20Projects" },
      { text: "Publications", link: "/Publications" },
    ],
    sidebar: generateSidebar(sidebarConfig),
    // socialLinks: [{ icon: "linkedin", link: "https://example.com" }],
    footer: {
      message:
        "The Primary care Emergent Technology Research and Advancement Group",
      copyright: "Copyright © 2026 The PETRA group",
    },
  },
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  ignoreDeadLinks: [
    "/Publications", // IDs to articles are not MD-based
  ],
});
