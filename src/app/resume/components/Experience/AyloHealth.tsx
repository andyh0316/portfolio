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
            {`Building Aylo's Electronic Health Record (EHR) system: Ensomata, while collaborating within a highly skilled engineering team. `}
          </Typography>

          <Stack pl={2}>
            <Stack direction="row" spacing={1}>
              <Box>-</Box>

              <Typography variant="inherit">{`Contributed to the full stack development of Ensomata, currently used by around 20 Aylo hospitals and clinics.`}</Typography>
            </Stack>

            {/* <Stack direction="row" spacing={1}>
              <Box>-</Box>

              <Typography variant="inherit">
                {`Led the frontend development of an internal application enabling real-time data analytics for Aylo's top executives.`}
              </Typography>
            </Stack> */}

            <Stack direction="row" spacing={1}>
              <Box>-</Box>

              <Typography variant="inherit">
                {`Implemened a two way synchronization processes between Aylo's core database and the Ensomata database.
                  The sync process decoupled Ensomata's data source from Aylo, enabling it to greatly improve performance, 
                  reliability and development speed.`}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      }
    />
  );
};
