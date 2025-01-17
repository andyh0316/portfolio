import { ChipProps } from "@mui/material";

export type Skill = {
  label: string;
  color: ChipProps["color"];
  experience?: number;
  description?: string;
};

export const skills: Skill[] = [
  {
    label: "C#",
    color: "primary",
    experience: 12,
    description: "Primary backend language.",
  },
  {
    label: ".NET",
    color: "primary",
    experience: 12,
    description: "Primary framework used to develop backend APIs.",
  },
  {
    label: "ReactJS",
    color: "primary",
    experience: 6,
    description:
      "My favorite frontend library. React provides component-based architecture with high level of flexibility and control.",
  },
  {
    label: "Typescript",
    color: "primary",
    experience: 6,
    description:
      "An absolute night and day difference when compared to Javascript. Typescript provides type safety for the entire application which saves me a lot of headaches during team development.",
  },
  {
    label: "Javascript",
    color: "primary",
    experience: 10,
    description: "Needs typescript.",
  },
  {
    label: "SQL",
    color: "primary",
    experience: 10,
    description: "Working knowledge for daily operating and querying database.",
  },
  {
    label: "NodeJS",
    color: "primary",
    experience: 6,
    description: "Secondary backend language. Much of its framework concepts is similar to C# .NET Entity Framework.",
  },
  {
    label: "HTML/CSS",
    color: "primary",
    experience: 10,
    description: "I can write HTML/CSS in my sleep. Not fascinating or anything, just part of front-end development.",
  },

  {
    label: "Entity Framework",
    color: "primary",
    experience: 12,
    description:
      "Primary ORM to manage database to datamodel relationship. High familarity with LINQ and database migrations.",
  },
  {
    label: "Data Structures and Algorithms",
    color: "primary",
    experience: 5,
    description: "DFS, DFS, Backtracking, Graphs.",
  },
  { label: "Python3", color: "primary", description: "For scripting and data analysis." },
  { label: "UI/UX Design", color: "primary", description: "UI/UX design at Cobro using Figma." },
  { label: "Azure", color: "primary", description: "For managing web servers, databases and CDNs" },
  { label: "AWS", color: "primary", description: "For Lambdas." },
];
