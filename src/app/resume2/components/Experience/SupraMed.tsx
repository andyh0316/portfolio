import { Stack, Typography } from "@/components";
import { ExperienceItem } from "./ExperienceItem";

export const SupraMed = () => {
  return (
    <ExperienceItem
      title="Full Stack Engineer"
      company="SupraMed (Now NexTech)"
      startEndYear={["2014", "2015"]}
      content={
        <Stack>
          {`Joined a start up company and helped develop an enterprise-scale plastic surgeon EHR software system capable
          of managing an entire facility's process. My role as the only full stack developer in the team includes
          designing/developing frontend and developing backend, using AngularJS and .NET. The company was then quickly
          acquired after only one year.`}
        </Stack>
      }
    />
  );
};
