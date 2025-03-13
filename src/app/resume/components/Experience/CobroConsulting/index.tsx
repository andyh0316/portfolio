import { Box, Grid, Stack, Tooltip, Typography } from "@/components";
import { ExperienceItem } from "../ExperienceItem";
import { Features } from "./Features";
import { useContext } from "react";
import { ResumeContext } from "@/app/resume/context";
import StarIcon from "@mui/icons-material/Star";

export const CobroConsulting = () => {
  const resumeContext = useContext(ResumeContext);

  const experienceBody = () => {
    return (
      <Stack spacing={0.5}>
        <Typography variant="inherit">
          {`Rebuilt the core web-system completely from the ground up, growing the company from 20 clients to 110. 
          The system provides data analytics services to educational institutions, over a total of 
          600,000 students and 40 million activities.`}
        </Typography>

        <Stack pl={2}>
          <Stack direction="row" spacing={1}>
            <Box>-</Box>
            <Typography variant="inherit">
              {`Leading full-stack architecture and development: UI/UX design, frontend, backend and multi-tenant databases. 
              Utilized SOLID design principles and comprehensive integration tests to greatly improve the reliability of the system,
              increasing client retention rate from 70% to around 95%`}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Box>-</Box>
            <Typography variant="inherit">
              {`Transformed infrastructure from single web-server to distributed system, greatly increasing reliability and performance, contributing to client retention rate.`}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Box>-</Box>
            <Typography variant="inherit">
              {`Streamlined the data import process, reducing operation hours by 80% and data accuracy to more than 99.9%.`}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Box>-</Box>
            <Typography variant="inherit">
              {`Continued rapid development of features: authentication, real-time reports, texting, surveys, file management and much more. 
              All of which increased client growth of 550% during the first 4 years.`}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Box>-</Box>
            <Typography variant="inherit">
              {`Leadership: led a team of 3 engineers while working with other core teams to maintain the application and grow our client base steadily.`}
            </Typography>
          </Stack>
        </Stack>

        {!resumeContext?.isPdfMode && <Features />}
      </Stack>
    );
  };

  return (
    <ExperienceItem
      title={
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography variant="inherit">Lead Software Engineer</Typography>
          <Tooltip title="My proudest accomplishments are in this company." placement="top">
            <StarIcon color="primary" fontSize="small" opacity={0.8} />
          </Tooltip>
        </Stack>
      }
      company="CoBro"
      startEndYear={["2016", "2022"]}
      content={experienceBody()}
    />
  );
};
