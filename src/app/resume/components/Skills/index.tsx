import {
  Box,
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
import { skillGroups } from "./skills";
// import { TfiViewListAlt as ListViewIcon } from "react-icons/tfi";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { ResumeContext } from "../../context";
import { SkillTag } from "./Skill";

export const Skills = () => {
  const resumeContext = useContext(ResumeContext);
  const [viewMode, setViewMode] = useState<"simple" | "detailed">("simple");
  const [openTooltipFor, setOpenTooltipFor] = useState<string | null>(null);

  const simpleView = () => {
    return (
      <Stack spacing={0.5}>
        {skillGroups.map((group) => (
          <Stack key={group.groupName} direction="row" spacing={1.2} alignItems={"center"}>
            <Box width="110px">
              <Typography fontWeight={(theme) => theme.typography.fontWeightRegular} fontSize={"1.10em"}>
                {group.groupName}:
              </Typography>
            </Box>

            <Box>
              <ClickAwayListener
                onClickAway={() => {
                  setOpenTooltipFor(null);
                }}
              >
                <Grid container spacing={0.8}>
                  {group.skills.map((skill) => {
                    return (
                      <Grid item key={skill.label}>
                        <SkillTag skill={skill} />
                      </Grid>
                    );
                  })}
                </Grid>
              </ClickAwayListener>
            </Box>
          </Stack>
        ))}
      </Stack>
    );
  };

  const detailedView = () => {
    return (
      <Stack spacing={2}>
        {skillGroups.map((skillGroup) => {
          const skills = skillGroup.skills;

          return (
            <Stack key={skillGroup.groupName} spacing={1}>
              {/* <Typography>{skillGroup.groupName}</Typography> */}
              <Stack sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                {skills.map((skill) => (
                  <Box
                    key={skill.label}
                    sx={{
                      bgcolor: resumeContext?.bgColor,
                      borderTop: "1px solid rgba(0,0,0,0.12)",
                      "&:first-of-type": {
                        borderTop: 0,
                      },
                    }}
                    p={1}
                  >
                    <Stack spacing={0.5}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="inherit" fontWeight={(theme) => theme.typography.fontWeightMedium}>
                          {skill.label}:
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {skill.experience} {skill.experience && "years"}
                        </Typography>
                      </Stack>
                      <Typography variant="inherit">{skill.description}</Typography>
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    );
  };

  return (
    <Domain
      title={
        <Stack width="100%" direction="row" alignItems="center" justifyContent={"space-between"}>
          <Typography variant="inherit">Skills</Typography>

          {!resumeContext?.isPdfMode && (
            <FormControlLabel
              control={
                <Switch
                  checked={viewMode === "detailed"}
                  onChange={(e) => setViewMode(e.target.checked ? "detailed" : "simple")}
                />
              }
              label={
                <Typography variant="caption" sx={{ textTransform: "none" }}>
                  Detailed View
                </Typography>
              }
            />
          )}
        </Stack>
      }
      // afterTitle={
      //   <>
      //     {!resumeContext?.isPdfMode && (
      //       <Stack direction="row" spacing={1} alignItems="center" justifyContent={"space-between"}>
      //         <FormControlLabel
      //           control={
      //             <Switch
      //               checked={viewMode === "detailed"}
      //               onChange={(e) => setViewMode(e.target.checked ? "detailed" : "simple")}
      //             />
      //           }
      //           label={<Typography variant="caption">Detailed View</Typography>}
      //         />
      //       </Stack>
      //     )}
      //   </>
      // }
    >
      <Collapse in={viewMode === "simple"}>{simpleView()}</Collapse>
      <Collapse in={viewMode === "detailed"} timeout={300}>
        {detailedView()}
      </Collapse>
    </Domain>
  );
};
