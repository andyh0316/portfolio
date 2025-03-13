import { Box, Stack, Typography } from "@/components";
import { ExperienceItem } from "./ExperienceItem";

export const AyloHealth = () => {
  return (
    <ExperienceItem
      title="Senior Full-Stack Engineer"
      company="Aylo Health - Ensomata"
      startEndYear={["2022", "Now"]}
      content={
        <Stack spacing={0.5}>
          <Typography variant="inherit">
            {`Served as a core contributor in the full stack development of Ensomata, an modern EHR mobile app, from initial conception through launch. 
              The solution is now implemented across approximately 20 Aylo hospitals and clinics`}
          </Typography>

          <Stack pl={2}>
            {/* <Stack direction="row" spacing={1}>
              <Box>-</Box>

              <Typography variant="inherit">
                {`Served as a core contributor in the full stack development of Ensomata from initial conception through launch and ongoing deployment; 
                 solution now implemented across approximately 20 Aylo hospitals and clinics.`}
              </Typography>
            </Stack> */}

            <Stack direction="row" spacing={1}>
              <Box>-</Box>

              <Typography variant="inherit">
                {`Implemented Ensomata frontend using React, Typescript, NextJS and ChakraUI, delivering an intuitive interface reducing 
                  training time by 50% and achieved a 95%+ satisfaction rating from healthcare professionals.`}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Box>-</Box>

              <Typography variant="inherit">
                {`Implemented a synchronization process between Aylo's core database and the Ensomata database, using AWS Lambda and SQS.
                  The sync process decoupled Ensomata's direct reads/writes from Aylo, enabling it to greatly improve performance, 
                  and development speed by 300%.`}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      }
    />
  );
};
