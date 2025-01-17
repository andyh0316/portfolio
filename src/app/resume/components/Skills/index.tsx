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
  Collapse,
  ToggleButtonGroup,
  ToggleButton,
  Switch,
  FormControlLabel,
} from "@/components";
import { Domain } from "../Domain";
import { ChipProps } from "@mui/material";
import { GiRank3 } from "react-icons/gi";
import { IconType } from "react-icons";
import { ReactNode, useState } from "react";
import { skills } from "./skills";
// import { TfiViewListAlt as ListViewIcon } from "react-icons/tfi";
import { MdViewList as ListViewIcon } from "react-icons/md";

export const Skills = () => {
  const [viewMode, setViewMode] = useState<"simple" | "detailed">("simple");

  const simpleView = () => {
    return (
      <Grid container spacing={0.8}>
        {skills.map((skill) => {
          let toolTip: ReactNode = null;

          if (skill.experience || skill.description) {
            toolTip = (
              <Stack>
                {skill.experience && <Typography variant="inherit">Experience: {skill.experience} years</Typography>}
                <Typography variant="inherit">{skill.description}</Typography>
              </Stack>
            );
          }

          return (
            <Grid item key={skill.label}>
              <Tooltip title={toolTip} placement="top">
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
          );
        })}
      </Grid>
    );
  };

  const detailedView = () => {
    return (
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell width="160px">Skill</TableCell>
              <TableCell width="120px" align="right">
                Years of Exp.
              </TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skills.map((skill) => (
              <TableRow key={skill.label}>
                <TableCell>{skill.label}</TableCell>
                <TableCell align="right">{skill.experience}</TableCell>
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
      title={"Skills"}
      afterTitle={
        <>
          <Stack direction="row" spacing={1} alignItems="center" width="100%" justifyContent={"flex-end"}>
            <FormControlLabel
              control={
                <Switch
                  checked={viewMode === "detailed"}
                  onChange={(e) => setViewMode(e.target.checked ? "detailed" : "simple")}
                />
              }
              label={<Typography variant="caption">List View</Typography>}
            />
          </Stack>
        </>
      }
    >
      <Collapse in={viewMode === "simple"}>{simpleView()}</Collapse>
      <Collapse in={viewMode === "detailed"} timeout={300}>
        {detailedView()}
      </Collapse>
    </Domain>
  );
};
