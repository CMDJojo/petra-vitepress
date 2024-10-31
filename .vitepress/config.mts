import { defineConfig } from "vitepress";
import { generateSidebar, VitePressSidebarOptions } from "vitepress-sidebar";

const sidebarConfig: VitePressSidebarOptions = {
  excludePattern: ["public"],
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
    ],
    sidebar: generateSidebar(sidebarConfig),
    socialLinks: [{ icon: "linkedin", link: "https://example.com" }],
    footer: {
      message:
        "The Primary care Emergent Technology Research and Advancement Group",
      copyright: "Copyright © 2024 The PETRA group",
    },
  },
});
