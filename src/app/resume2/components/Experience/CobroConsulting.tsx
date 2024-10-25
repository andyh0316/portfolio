import { Stack, Typography } from "@/components";
import { ExperienceItem } from "./ExperienceItem";

export const CobroConsulting = () => {
  return (
    <ExperienceItem
      title="Principal Software Engineer"
      company="Cobro Consulting"
      startEndYear={["2016", "2021"]}
      content={
        <Stack>
          <Typography variant="inherit">
            Led the design and development of a large scape SaaS application from zero. The application is used by
            around 100 US high school districts to store over total 50,000 students and 10,000,000 services.
          </Typography>

          <Stack pl={2}>
            <Typography variant="inherit">
              - Design and implentation in the entire software stack: UI/UX, API, database, multi-tenancy.
            </Typography>
            <Typography variant="inherit">
              - Features includes: OAuth2, Data Import, Data Export, CRUD pages, Reporting, Texting and much more.
            </Typography>
          </Stack>
        </Stack>
      }
    />
  );
};
