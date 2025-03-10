import { ChipProps } from "@mui/material";
import { ReactNode } from "react";

export type SkillGroup = {
  groupName: string;
  skills: Skill[];
};

export type Skill = {
  label: string;
  color: ChipProps["color"];
  experience?: number;
  description?: ReactNode;
};

export const skillGroups: SkillGroup[] = [
  {
    groupName: "Backend",
    skills: [
      {
        label: "C# + .NET",
        color: "primary",
        experience: 10,
        description: (
          <>
            Language and framework for building application backend. High expertise with datamodeling, migrations and
            LINQ
          </>
        ),
      },
      {
        label: "SQL",
        color: "primary",
        experience: 10,
        description: <>High expertise with writing queries, schema building and optimizing.</>,
      },
      {
        label: "Node.js + Express.js",
        color: "primary",
        experience: 3,
        description: <>Good familiarity building modern applications with this framework.</>,
      },
      {
        label: "Java",
        color: "primary",
        description: <>University level and some professional experience</>,
      },
      {
        label: "Python3",
        color: "primary",
        description: <>Casual familiarity: mostly used for quick scripting and analysis.</>,
      },
      {
        label: "C",
        color: "primary",
        description: (
          <>University level experience: pointers, memory allocations, building data structures, building compiler.</>
        ),
      },
    ],
  },
  {
    groupName: "Frontend",
    skills: [
      {
        label: "Typescript/Javascript",
        color: "primary",
        experience: 8,
        description: <>High expertise</>,
      },
      {
        label: "React",
        color: "primary",
        experience: 6,
        description: <>High expertise.</>,
      },
      {
        label: "HTML/CSS",
        color: "primary",
        experience: 8,
        description: <>I can write in my sleep.</>,
      },
      {
        label: "UI/UX Design",
        color: "primary",
        description: (
          <>
            Speed learned UI/UX design at Cobro using Figma, to save the company some cost. Not an expert by any means.
          </>
        ),
      },
    ],
  },
  {
    groupName: "Fundamentals",
    skills: [
      {
        label: "System Architecture",
        color: "primary",
        experience: 8,
        description: (
          <>
            First hand experience in creating a SaaS application from conception to launch, making pivotal system design
            decisions across frontend, backend and deployment. Utilized design principles such as SOLID, to maximize the
            maintainability, reliability and performance of the application.
          </>
        ),
      },
      {
        label: "Distributed Systems",
        color: "primary",
        experience: 5,
        description: (
          <>
            Hands on experience with building web-servers load balancers, distributed databases, blob storage, redis,
            lambda functions.
          </>
        ),
      },
      {
        label: "Testing",
        color: "primary",
        experience: 10,
        description: (
          <>
            Full experience in different levels of software testing: unit test, integration test, system test and
            end-to-end testing. Using tools such as NUnit and Selenium.
          </>
        ),
      },
      {
        label: "Data Structures & Algorithms",
        color: "primary",
        experience: 5,
        description: <>Fundamental knowledge in DSA concepts such as Hashmaps, BigO, DFS/BFS, Backtracking, Graphs.</>,
      },
    ],
  },
  {
    groupName: "Tools",
    skills: [
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
        label: "Docker",
        color: "primary",
        description: <>For running containerized application locally.</>,
      },
      {
        label: "NUnit",
        color: "primary",
        description: <>For running unit tests.</>,
      },
      {
        label: "Selenium",
        color: "primary",
        description: <>For running end to end testing.</>,
      },
      {
        label: "ChatGPT",
        color: "primary",
        description: <>Just like everyone else.</>,
      },
    ],
  },
];
