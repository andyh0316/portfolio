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
            Led the design and development of the company's flagship SaaS application completely from zero. The
            application launched in one year of development and is now used by around 80 US high school districts to
            tracking over total of 300,000 students and 20,000,000 services.
          </Typography>

          <Stack pl={2}>
            <Typography variant="inherit">
              - Built the entire software stack: UI/UX, API, database, multi-tenancy.
            </Typography>
            <Typography variant="inherit">
              - Features: OAuth2, Data Import, Data Export, CRUD pages, Reporting, Texting and much more.
            </Typography>
          </Stack>
        </Stack>
      }
    />
  );
};
