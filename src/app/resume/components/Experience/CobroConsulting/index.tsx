import { Box, Grid, Stack, Typography } from "@/components";
import { ExperienceItem } from "../ExperienceItem";
import { Features } from "./Features";

export const CobroConsulting = () => {
  const experienceBody = () => {
    return (
      <Stack spacing={0.5}>
        <Typography variant="inherit">
          {`Led the design and development of the company's flagship SaaS application completely from zero. The
          application launched in one year of development and is now used by around 80 US school districts to tracking
          over total of 300,000 students and 20,000,000 services.`}
        </Typography>

        <Stack pl={2}>
          <Stack direction="row" spacing={1}>
            <Box>-</Box>
            <Typography variant="inherit">
              {`Built the entire software stack: UI/UX, ReactJS frontend, .NET backend and multi-tenant databases.`}
            </Typography>
          </Stack>

          {/* <Stack direction="row" spacing={1}>
          <Box>-</Box>
          <Typography variant="inherit">
            {`Features: Authentication, Data Import, Reports, Texting and much more.`}
          </Typography>
        </Stack> */}

          <Stack direction="row" spacing={1}>
            <Box>-</Box>
            <Typography variant="inherit">
              {`Management: led a team of 3 developers to maintain the application.`}
            </Typography>
          </Stack>
        </Stack>

        <Box>
          <Grid container spacing={0.8} display="flex">
            <Grid item>
              <Stack justifyContent="center" height="100%">
                <Typography variant="inherit">Features (click to see):</Typography>
              </Stack>
            </Grid>

            <Features />
          </Grid>
        </Box>
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
