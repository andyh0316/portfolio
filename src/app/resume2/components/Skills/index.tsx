import {
  Chip,
  Grid,
  Stack,
  Typography,
  Tooltip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@/components";
import { Domain } from "../Domain";
import { ChipProps } from "@mui/material";
import { GiRank3 } from "react-icons/gi";
import { IconType } from "react-icons";
import { ReactNode, useState } from "react";
import { skills } from "./skills";

export const Skills = () => {
  const [viewMode, setViewMode] = useState<"simple" | "detailed">("simple");

  const simpleView = () => {
    return (
      <Grid container spacing={0.8}>
        {skills.map((skill) => (
          <Grid item key={skill.label}>
            <Tooltip title={skill.description} placement="top">
              <Chip
                label={
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Typography variant="inherit">{skill.label}</Typography>
                  </Stack>
                }
                onClick={() => {}}
                color={skill.color}
                size="small"
                variant="outlined"
              />
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    );
  };

  const detailedView = () => {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Skill</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skills.map((skill) => (
              <TableRow key={skill.label}>
                <TableCell>{skill.label}</TableCell>
                <TableCell>{skill.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Domain
      title={
        <Stack direction="row">
          <Typography variant="inherit">Skills</Typography>
          <IconButton onClick={() => setViewMode("simple")} size="small">
            1
          </IconButton>
          <IconButton onClick={() => setViewMode("detailed")} size="small">
            2
          </IconButton>
        </Stack>
      }
    >
      {viewMode === "simple" && simpleView()}
      {viewMode === "detailed" && detailedView()}
    </Domain>
  );
};
