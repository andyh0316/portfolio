import { Stack, Typography } from "@/components";
import { ExperienceItem } from "./ExperienceItem";

export const AyloHealth = () => {
  return (
    <ExperienceItem
      title="Senior Software Engineer"
      company="Aylo Health"
      startEndYear={["2022", "Present"]}
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
