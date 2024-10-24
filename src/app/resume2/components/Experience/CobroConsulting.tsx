import { Stack, Typography } from "@/components";
import { ExperienceItem } from "./ExperienceItem";

export const CobroConsulting = () => {
  return (
    <ExperienceItem
      title="Principal Software Engineer"
      company="Cobro Consulting"
      startEndYear={["2016", "2021"]}
      content={
        <>
          <Stack>
            Responsible for building a full scale application used by over 50 school districts in US. The application
            manages over 50,000 students and over 5 million services.
            <Stack>
              <Typography fontSize="1em">- List 1</Typography>
              <Typography fontSize="1em">- List 2</Typography>
            </Stack>
          </Stack>
        </>
      }
    />
  );
};
