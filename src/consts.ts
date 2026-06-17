import type { Categories, Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "喫茶去",
  DESCRIPTION: "Pastorale's blog",
  EMAIL: "harry31031802@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 9,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "喫茶去",
  DESCRIPTION: "Pastorale's blog",
};

export const BLOG: Metadata = {
  TITLE: "文章",
  DESCRIPTION: "读书笔记与随记。",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

// Identity themes surfaced in the header, echoing the site's subtitle
// (读书、佛学、日本史与音乐). Each links to its tag page; Astro encodes the
// CJK slug. Keep this short — the masthead stays calm.
export const CATEGORIES: Categories = [
  { LABEL: "佛教", HREF: "/tags/佛教" },
  { LABEL: "日本", HREF: "/tags/日本" },
  { LABEL: "音乐", HREF: "/tags/音乐" },
];

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/Pastorale21",
  },
];
