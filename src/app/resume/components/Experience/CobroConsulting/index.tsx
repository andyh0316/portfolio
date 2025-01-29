import { Box, Grid, Stack, Typography } from "@/components";
import { ExperienceItem } from "../ExperienceItem";
import { Features } from "./Features";
import { useContext } from "react";
import { ResumeContext } from "@/app/resume/context";

export const CobroConsulting = () => {
  const resumeContext = useContext(ResumeContext);

  const experienceBody = () => {
    return (
      <Stack spacing={0.5}>
        <Typography variant="inherit">
          {`Built Compass entirely from the ground up. The SasS
          application launched in one year of development and is now used by around 120 clients (school districts) to tracking
          over total of 300,000 students and 20,000,000 services.`}
        </Typography>

        <Stack pl={2}>
          <Stack direction="row" spacing={1}>
            <Box>-</Box>
            <Typography variant="inherit">
              {`Built the entire software stack: UI/UX, ReactJS frontend, .NET backend and multi-tenant databases.`}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Box>-</Box>
            <Typography variant="inherit">
              {`Management: led a team of 3 developers to maintain the application.`}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Box>-</Box>
            <Typography variant="inherit">
              {`Features: Authentication, Data Import, Exports, Reports, Texting, Surveys, File Manager and much much more.`}
            </Typography>
          </Stack>
        </Stack>

        {!resumeContext?.isPdfMode && <Features />}
      </Stack>
    );
  };

  return (
    <ExperienceItem
      title="Principal Software Engineer"
      company="Cobro Consulting"
      startEndYear={["2016", "2022"]}
      content={experienceBody()}
    />
  );
};
