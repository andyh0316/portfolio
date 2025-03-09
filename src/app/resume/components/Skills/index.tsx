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
        <Stack spacing={0.5}>
          {skillGroups.map((group) => (
            <Stack key={group.groupName} direction="row" spacing={1.2} alignItems={"center"}>
              <Box width="110px">
                <Typography fontWeight={(theme) => theme.typography.fontWeightRegular} fontSize={"1.10em"}>
                  {group.groupName}:
                </Typography>
              </Box>

              <Box>
                <Grid container spacing={0.8}>
                  {group.skills.map((skill) => {
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
                              if (openTooltipFor === skill.label) {
                                setOpenTooltipFor(null);
                              } else {
                                setOpenTooltipFor(skill.label);
                              }
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
              </Box>
            </Stack>
          ))}
        </Stack>
      </ClickAwayListener>
    );
  };

  const detailedView = () => {
    return (
      <Stack spacing={2}>
        {skillGroups.map((skillGroup) => {
          const skills = skillGroup.skills;

          return (
            <Stack spacing={1}>
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
      title={"Skills"}
      afterTitle={
        <>
          {!resumeContext?.isPdfMode && (
            <Stack direction="row" spacing={1} alignItems="center" width="100%" justifyContent={"flex-start"}>
              <FormControlLabel
                control={
                  <Switch
                    checked={viewMode === "detailed"}
                    onChange={(e) => setViewMode(e.target.checked ? "detailed" : "simple")}
                  />
                }
                label={<Typography variant="caption">Detailed View</Typography>}
              />
            </Stack>
          )}
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
