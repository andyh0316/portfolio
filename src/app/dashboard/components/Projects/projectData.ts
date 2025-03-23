interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export const projectData: Project[] = [
  {
    title: "Import System",
    description: "Convenient system streamlining data import ETL process for any educational instutition.",
    image: "/cobro-demo/student-list.png",
    technologies: ["React", "Websocket", "C#"],
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team workflow capabilities.",
    image: "/cobro-demo/student-page.png",
    technologies: ["React", "Firebase", "Material-UI"],
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio website showcasing projects and skills with dynamic content loading.",
    image: "/cobro-demo/student-filter.png",
    technologies: ["Next.js", "Material-UI", "Framer Motion"],
  },
];
