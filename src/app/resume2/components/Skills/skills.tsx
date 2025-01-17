import { Chip, Grid, Stack, Typography, Tooltip } from "@/components";
import { ReactNode } from "react";
import { ChipProps } from "@mui/material";

export type Skill = {
  label: string;
  color: ChipProps["color"];
  description?: ReactNode;
};

export const skills: Skill[] = [
  {
    label: "C#",
    color: "primary",
    description: (
      <Stack>
        <Typography variant="caption">Experience: 12 years</Typography>
        <Typography variant="caption">Primary backend language</Typography>
      </Stack>
    ),
  },
  {
    label: ".NET",
    color: "primary",
    description: (
      <Stack>
        <Typography variant="caption">Experience: 12 years</Typography>
        <Typography variant="caption">Primary framework used to develop backend APIs.</Typography>
      </Stack>
    ),
  },
  {
    label: "ReactJS",
    color: "primary",
    description: (
      <Stack>
        <Typography variant="caption">Experience: 6 years</Typography>
        <Typography variant="caption">
          My favorite frontend library. React provides component-based architecture with high level of flexibility and
          control.
        </Typography>
      </Stack>
    ),
  },
  {
    label: "Typescript",
    color: "primary",
    description: (
      <Stack>
        <Typography variant="caption">Experience: 6 years</Typography>
        <Typography variant="caption">
          An absolute night and day difference when compared to Javascript. Typescript provides type safety for the
          entire application which saves me a lot of headaches during team development.
        </Typography>
      </Stack>
    ),
  },
  {
    label: "SQL",
    color: "primary",
    description: (
      <Stack>
        <Typography variant="caption">Experience: 10 years</Typography>
        <Typography variant="caption">I mainly use SQL to query data.</Typography>
      </Stack>
    ),
  },
  {
    label: "Javascript",
    color: "primary",
    description: (
      <Stack>
        <Typography variant="caption">Experience: 10 years</Typography>
        <Typography variant="caption">Needs typescript.</Typography>
      </Stack>
    ),
  },
  { label: "NodeJS", color: "primary" },
  { label: "HTML", color: "primary" },
  { label: "CSS", color: "primary" },
  { label: "Python3", color: "primary" },
  {
    label: "Entity Framework",
    color: "primary",
    description: (
      <Stack>
        <Typography variant="caption">Experience: 12 years</Typography>
        <Typography variant="caption">
          Primary ORM to manage database to datamodel relationship. High familarity with LINQ and database migrations.
        </Typography>
      </Stack>
    ),
  },
  { label: "MS SQL Server", color: "primary" },
  { label: "UI/UX Design", color: "primary" },
  { label: "Data Structures", color: "primary" },
  { label: "Algorithms", color: "primary" },
  { label: "Azure", color: "primary" },
  { label: "AWS", color: "primary" },
];
