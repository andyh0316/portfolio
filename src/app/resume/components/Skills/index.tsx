import {
  Chip,
  Collapse,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@/components";
import { ReactNode, useContext, useState } from "react";
import { Domain } from "../Domain";
import { skills } from "./skills";
// import { TfiViewListAlt as ListViewIcon } from "react-icons/tfi";
import { ResumeContext } from "../../page";
import ClickAwayListener from "@mui/material/ClickAwayListener";

export const Skills = () => {
  const resumeContext = useContext(ResumeContext);
  const [viewMode, setViewMode] = useState<"simple" | "detailed">("simple");
  const [openTooltipFor, setOpenTooltipFor] = useState<string | null>(null);

  const simpleView = () => {
    return (
      <ClickAwayListener
        onClickAway={() => {
          setOpenTooltipFor(null);
        }}
      >
        <Grid container spacing={0.8}>
          {skills.map((skill) => {
            let toolTip: ReactNode = null;

            if (skill.experience || skill.description) {
              toolTip = (
                <Stack spacing={2}>
                  <Stack>
                    {skill.experience && (
                      <Typography variant="inherit">Experience: {skill.experience} years</Typography>
                    )}
                    <Typography variant="inherit">{skill.description}</Typography>
                  </Stack>

                  <Typography variant="inherit" sx={{ opacity: 0.75 }}>
                    Click away to close this
                  </Typography>
                </Stack>
              );
            }

            return (
              <Grid item key={skill.label}>
                <Tooltip
                  title={toolTip}
                  open={openTooltipFor === skill.label}
                  // onClose={() => setOpenTooltipFor(null)} // close when hovered away
                  placement="top"
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                >
                  <Chip
                    label={
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Typography variant="inherit">{skill.label}</Typography>
                      </Stack>
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenTooltipFor(skill.label);
                    }}
                    color={skill.color}
                    size="small"
                    variant="outlined"
                  />
                </Tooltip>
              </Grid>
            );
          })}
        </Grid>
      </ClickAwayListener>
    );
  };

  const detailedView = () => {
    return (
      <TableContainer component={Paper} sx={{ bgcolor: resumeContext?.bgColor }} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: resumeContext?.bgColor }}>
              <TableCell width="160px">Skill</TableCell>
              <TableCell width="120px" align="right">
                Years of Exp.
              </TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skills.map((skill) => (
              <TableRow key={skill.label} sx={{ bgcolor: resumeContext?.bgColor }}>
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
