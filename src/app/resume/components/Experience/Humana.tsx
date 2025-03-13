import { Stack, Typography } from "@/components";
import { ExperienceItem } from "./ExperienceItem";

export const Humana = () => {
  return (
    <ExperienceItem
      title="Junior Software Engineer"
      company="Humana"
      startEndYear={["2012", "2014"]}
      content={
        <Stack>
          {`Began my journey in web backend and motivated myself to grow into a full stack role to deliver full features independently.`}
        </Stack>
      }
    />
  );
};
