import { Stack, Typography } from "@/components";
import { ExperienceItem } from "./ExperienceItem";

export const SupraMed = () => {
  return (
    <ExperienceItem
      title="Full Stack Engineer"
      company="SupraMed"
      startEndYear={["2014", "2016"]}
      content={
        <Stack>
          {`In this startup, I rapidly delivered new features for the company's EHR system,
           while learning valuable skills during regular meetings with the software Architect. 
           The startup was acquired within two years.`}
        </Stack>
      }
    />
  );
};
