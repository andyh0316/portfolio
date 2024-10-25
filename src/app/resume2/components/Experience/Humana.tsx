import { Stack, Typography } from "@/components";
import { ExperienceItem } from "./ExperienceItem";

export const Humana = () => {
  return (
    <ExperienceItem
      title="Junior Backend Engineer"
      company="Humana"
      startEndYear={["2012", "2014"]}
      content={
        <Stack>
          {`Introduction to C# .NET and API. Worked on a team of 10 developers on a health-care management.`}
        </Stack>
      }
    />
  );
};
