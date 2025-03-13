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
          {`Rebuilt the core product completely from the ground up, growing the company from 20 clients to 110 in the first 3 years. 
          The system provides analytics services to educational institutions, serving over 600,000 students and tracking 40 million activities.`}
        </Typography>

        <Stack pl={2}>
          <Stack direction="row" spacing={1}>
            <Box>-</Box>
            <Typography variant="inherit">
              {`Leading full-stack architecture and development across UI/UX design, frontend, backend and multi-tenant databases. 
                Delivered features: authentication, real-time reports, texting service, student surveys, file management and much more.
                Increased client retention rate from 70% to 95% by improving system reliability through design principles and 
                comprehensive testings`}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Box>-</Box>
            <Typography variant="inherit">
              {`Streamlined the data import (ETL) workflow with intuitive UI, automating schema mapping and optimizing validations, 
              resulting in 90%+ in man hours reduction and 99.9%+ in data integrity.`}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Box>-</Box>
            <Typography variant="inherit">
              {`Architected cloud infrastructure solution using Azure, deploying multi web-servers with load balancing, object storage 
               and elastic database clustering, greatly improving system uptime, scalability and disaster recovery capabilities.`}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Box>-</Box>
            <Typography variant="inherit">
              {`Leadership: led a team of 3 engineers while working with other core teams to maintain and grow the app.`}
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
