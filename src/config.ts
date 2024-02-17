import type { Config } from "./types";
import {
  Home,
  Feather,
  Twitter,
  GitHub,
  Figma,
  CheckSquare,
  Mic,
  Briefcase,
  Layers,
  Package,
} from "react-feather";

const config: Config = {
  app: {
    title: "Milind Mishra",
    subtitle: "Milind's Portfolio",
    thumbnailUrl: "/img/logo.svg",
  },
  meta: {
    url: "https://reshaped-blog-starter.vercel.app",
    title: "Milind Mishra",
    description: "Milind's Portfolio",
    twitter: {
      username: "milindstwt",
    },
  },
  menu: [
    {
      icon: Home,
      title: "Home",
      href: "/",
    },
    {
      icon: Feather,
      title: "Articles",
      href: "/article",
    },
    {
      icon: Layers,
      title: "Stack",
      href: "/stack",
    },

    {
      title: "Projects",
      items: [
        {
          icon: Package,
          title: "100xdocs",
          href: "https://100xdocs.com",
        },
        {
          icon: CheckSquare,
          title: "Design System Checklist",
          href: "https://www.designsystemchecklist.com",
        },
        {
          icon: Mic,
          title: "Design System Interviews",
          href: "https://reshaped.so/blog",
        },
        {
          icon: Briefcase,
          title: "Formaat Design",
          href: "https://formaat.design",
        },
      ],
    },
    {
      title: "Online",
      items: [
        {
          icon: Twitter,
          title: "Twitter",
          href: "https://twitter.com/milindstwt",
        },
        {
          icon: GitHub,
          title: "GitHub",
          href: "https://github.com/thatbeautifuldream",
        },
        {
          icon: Figma,
          title: "Figma",
          href: "https://www.figma.com/@milindmishra",
        },
      ],
    },
  ],
};

export default config;
