import { ChipProps } from "@mui/material";
import { ReactNode } from "react";

export type Skill = {
  label: string;
  color: ChipProps["color"];
  experience?: number;
  description?: ReactNode;
};

export const skills: Skill[] = [
  {
    label: "System Architecture",
    color: "primary",
    experience: 8,
    description: (
      <>
        CoBro empowered me to become system architect: where I challenged myself to create a medium-sized SaaS web-app
        from scratch. System design decisions and implemention made in all components of a web-system: multi-tenant
        databases, backend presentation-layer, application-layer, service-layer, frontend architecture, and deployment.
      </>
    ),
  },
  {
    label: "C# + .NET",
    color: "primary",
    experience: 10,
    description: (
      <>
        Language and framework for building application backend. High expertise with datamodeling, migrations and LINQ
      </>
    ),
  },
  {
    label: "Node.js + Express.js",
    color: "primary",
    experience: 3,
    description: <>Much of its framework concepts is similar to C# .NET Entity Framework.</>,
  },
  {
    label: "ReactJS",
    color: "primary",
    experience: 6,
    description: <>JavaScript library for building user interfaces with reusable components. High expertise.</>,
  },
  {
    label: "Typescript/Javascript",
    color: "primary",
    experience: 8,
    description: <>Scripting languages that enable interactive web experiences. High expertise</>,
  },
  {
    label: "HTML/CSS",
    color: "primary",
    experience: 8,
    description: <>I can write in my sleep.</>,
  },
  {
    label: "SQL",
    color: "primary",
    experience: 10,
    description: <>High familarity with writing long queries and stored procedures.</>,
  },

  {
    label: "Data Structures & Algorithms",
    color: "primary",
    experience: 5,
    description: <>Good fundamental in DSA concepts such as Hashmaps, BigO, DFS/BFS, Backtracking, Graphs.</>,
  },
  {
    label: "Python3",
    color: "primary",
    description: <>For scripting and data analysis.</>,
  },
  {
    label: "UI/UX Design",
    color: "primary",
    description: (
      <>Speed learned UI/UX design at Cobro using Figma, to save the company some cost. Not an expert by any means.</>
    ),
  },
  {
    label: "Azure",
    color: "primary",
    description: <>For managing web-servers, databases, redis cache and Object storage.</>,
  },
  {
    label: "AWS",
    color: "primary",
    description: <>For managing Lambdas functions, SQS and SNS.</>,
  },
  {
    label: "AI: Claude",
    color: "primary",
    description: <>Just like everyone else.</>,
  },
];
