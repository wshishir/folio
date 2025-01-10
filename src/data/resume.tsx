import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
export const DATA = {
  name: "Shishir",
  initials: "SH",
  url: "https://dillion.io/",
  location: "India",
  description:
    "Full Stack Developer focused on crafting seamless, scalable web solutions across front-end and back-end tech.",
  summary:
    "I’m a 20 year old developer and freelancer based in India. I’ve taken coding seriously since 2022. Recently graduated, I’ve honed my skills through hands-on projects in JavaScript, and frameworks like React and Node.js. I like contributing to 🤓 open source as a web developer. Excited to contribute my skills and grow in a collaborative environment. Currently struggling with advanced backend 🦀 and devops.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "TailwindCSS",
    "Expressjs",
    "Typescript",
    "Node.js",
    "Postgres",
    "MongoDB",
    "Docker",
    "Java",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "shishirtech506@example.com",
    tel: "+917706020557",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/wshishir",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shishir64/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/yshishirr",
        icon: Icons.x,

        navbar: true,
      },
    },
  },
  projects: [
    {
      title: "Ascent",
      href: "https://ascent-eta.vercel.app/",
      active: true,
      description:
        "Ascent is a cutting-edge project management application designed to streamline teamwork and enhance productivity.",
      technologies: [
        "Next.js",
        "Javascript",
        "Prisma",
        "NeonDB",
        "Clerk",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ascent-eta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/wshishir/ascent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ascent.png",
    },
    {
      title: "Medium.com",
      href: "https://blogging-app-lime.vercel.app/signin",
      active: true,
      description:
        "Created a blogging app where users can read and publish blogs.",
      technologies: [
        "React.js",
        "Typescript",
        "Hono",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://blogging-app-lime.vercel.app/signin",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/wshishir/blogging-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Saas Landing Page",
      href: "https://saas-henna-omega.vercel.app/",
      active: true,
      description: "Light Saas Landing Page build in nextjs & framer-motion.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://saas-henna-omega.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/wshishir/saas",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/saas.png",
    },
    {
      title: "Portfolio Website",
      href: "https://folio-shishir.vercel.app/",
      active: true,
      description: "Developed my personal portfolio website using Magic UI .",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Magic UI"],
      links: [
        {
          type: "Website",
          href: "https://folio-shishir.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/wshishir/folio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/folio.png",
    },
  ],
} as const;
