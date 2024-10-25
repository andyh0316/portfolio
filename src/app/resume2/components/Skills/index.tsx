import { Chip, Grid, Stack, Typography } from "@/components";
import { Domain } from "../Domain";
import { ChipProps } from "@mui/material";

export type Skill = {
  label: string;
  color: ChipProps["color"];
};

export const Skills = () => {
  const skills: Skill[] = [
    { label: "C#", color: "primary" },
    { label: ".NET", color: "primary" },
    { label: "ReactJS", color: "primary" },
    { label: "Typescript", color: "primary" },
    { label: "SQL", color: "primary" },
    { label: "Javascript", color: "primary" },
    { label: "Node", color: "primary" },
    { label: "HTML", color: "primary" },
    { label: "CSS", color: "primary" },
    { label: "Python3", color: "primary" },
    { label: "Entity Framework", color: "primary" },
    { label: "MS SQL Server", color: "primary" },
    { label: "UI/UX Design", color: "primary" },
    { label: "Azure", color: "primary" },
    { label: "AWS", color: "primary" },
    { label: "Data Structures", color: "primary" },
    { label: "Algorithms", color: "primary" },
  ];

  return (
    <Domain title="Skills">
      <Grid container spacing={0.8}>
        {skills.map((skill) => (
          <Grid item key={skill.label}>
            <Chip label={skill.label} color={skill.color} size="small" variant="outlined" />
          </Grid>
        ))}

        {/* <Stack direction="row" spacing={1}>
          <Chip label="C#" size="small" color="primary" variant="outlined" />
          <Chip label=".NET" size="small" color="primary" variant="outlined" />
          <Chip label="ReactJS" size="small" color="primary" variant="outlined" />
          <Chip label="Typescript" size="small" color="primary" variant="outlined" />
          <Chip label="SQL" size="small" color="primary" variant="outlined" />
          <Chip label="Javascript" size="small" color="primary" variant="outlined" />

          <Chip label="Node" size="small" color="primary" variant="outlined" />
          <Chip label="HTML" size="small" color="primary" variant="outlined" />
          <Chip label="CSS" size="small" color="primary" variant="outlined" />
          <Chip label="Python3" size="small" color="primary" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip label=".NET" size="small" variant="outlined" />
          <Chip label="Entity Framework" size="small" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip label="MS SQL Server" size="small" variant="outlined" />
          <Chip label="Azure" size="small" variant="outlined" />
          <Chip label="AWS" size="small" variant="outlined" />
          <Chip label="Data Structures" size="small" variant="outlined" />
          <Chip label="Algorithms" size="small" variant="outlined" />
        </Stack> */}
      </Grid>
    </Domain>
  );
};
