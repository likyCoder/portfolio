import { BtnListType, ProjectListType } from "./types";

export const projectsData: ProjectListType[] = [
  {
    id: 0,
    name: "Hackers Hub",
    subHeading: "Hackers Hub Web Platform",
    description:
      "Hackers Hub is a web platform for hackers to connect, share knowledge, and collaborate on projects. It includes features like forums, project showcases, and resources for hackers.",
    demoLink: "https://likyhackershub.blogspot.com",
    sourceLink: "", // Add GitHub link if available
    techStack: ["Google Blogger", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 1,
    name: "Liky Lancer Company Site",
    subHeading: "Freelancing Web Platform",
    description:
      "An official freelancing platform site built for Liky Lancers Company (LLC) to showcase services, connect lancers, and provide job listings.",
    demoLink: "https://likycoder.github.io/Liky_Lancer_company",
    sourceLink: "", // Add GitHub source if available
    techStack: ["HTML", "CSS", "JavaScript"],
  },  
  {
    id: 2,
    name: "Gregs-Hil Nursery and Primary School Site",
    subHeading: "Freelancing Web Platform",
    description:
      "A custom website developed for Gregs-Hil Nursery and Primary School under Liky Lancers Company. It features modern UI, optimized layout, and educational info delivery.",
    demoLink: "https://likycoder.github.io/Gregs-Hil-Nursery_and_primary_schooll/",
    sourceLink: "", // Add GitHub repo link if available
    techStack: ["HTML", "CSS", "JavaScript"],
  },  
  {
    id: 3,
    name: "Exness Affiliate Trading Platform",
    subHeading: "Trade Affiliate with Exness",
    description:
      "Join Exness and earn money by referring new clients. This platform allows you to track your earnings and manage your affiliate account.",
    demoLink: "https://one.exnesstrack.org/a/bis9q3msvx",
    sourceLink: "", // Add GitHub repo if applicable
    techStack: ["HTML", "CSS", "JavaScript"],
  }
];

export const BtnList: BtnListType[] = [
  {
    label: "Blog",
    link: "https://medium.com/@likyjosh123",
    icon: "blog",
    newTab: true,
  },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/likycoder",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/liky-lancers-company-uganda/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Telegram",
    link: "https://t.me/likycoder",
    icon: "telegram",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
