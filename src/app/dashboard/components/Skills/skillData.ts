interface Skill {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export const skillData: Skill[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, product management, and payment processing.",
    image: "https://via.placeholder.com/300x180",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team workflow capabilities.",
    image: "https://via.placeholder.com/300x180",
    technologies: ["React", "Firebase", "Material-UI"],
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio website showcasing skills and skills with dynamic content loading.",
    image: "https://via.placeholder.com/300x180",
    technologies: ["Next.js", "Material-UI", "Framer Motion"],
  },
];
