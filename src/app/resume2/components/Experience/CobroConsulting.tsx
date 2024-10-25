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
            Responsible for building a full scale application used by over 100 school districts in US. The application
            manages over 50,000 students and over 5 million services.
          </Typography>

          <Stack pl={2}>
            <Typography variant="inherit">
              - Responsibilites: UI/UX design and implementation, Backend architecture and implementation, SQL databases
              management
            </Typography>
            {/* <Typography fontSize="1em">- List 2</Typography> */}
          </Stack>
        </Stack>
      }
    />
  );
};
