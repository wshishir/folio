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
        "Ascent is a cutting-edge project management application designed to streamline teamwork, enhance productivity, and elevate project execution to new heights.",
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
      ],
      image: "",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
