import { ComponentType, ReactElement, lazy } from "react";
import dynamic from "next/dynamic";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  ladyLoadContent: ComponentType<{}>;
}

let projectId = 1;
export const projectData: Project[] = [
  {
    id: projectId++,
    title: "Import System",
    description: "Convenient system streamlining data import ETL process for any educational instutition.",
    image: "/cobro-demo/import-thumbnail.png",
    technologies: ["C#", "Websocket", "React", "Next.js"],
    ladyLoadContent: dynamic(() => import("./components/ImportProject"), {
      loading: () => null,
      ssr: false,
    }),
  },
  {
    id: projectId++,
    title: "Compass",
    description: "SaaS application providing tracking and analytics for students.",
    image: "/cobro-demo/student-list.png",
    technologies: ["C#", "Entity Framework", "SQL Server", "React", "Material-UI", "Framer Motion"],
    ladyLoadContent: dynamic(() => import("./components/CompassProject"), {
      loading: () => null,
      ssr: false,
    }),
  },
  {
    id: projectId++,
    title: "Texting",
    description: "Feature for managing and scheduling texts between staff and students.",
    image: "/cobro-demo/texting.png",
    technologies: ["C#", "Angular.js"],
    ladyLoadContent: dynamic(() => import("./components/TextingProject"), {
      loading: () => null,
      ssr: false,
    }),
  },
];
