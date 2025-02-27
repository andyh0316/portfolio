import { Box, Stack, Typography } from "@/components";
import { ExperienceItem } from "./ExperienceItem";

export const AyloHealth = () => {
  return (
    <ExperienceItem
      title="Senior Software Engineer"
      company="Aylo Health - Ensomata"
      startEndYear={["2022", "Now"]}
      content={
        <Stack spacing={0.5}>
          <Typography variant="inherit">
            {`Full-stack developer leading 2 high-impact projects while collaborating with cross-functional teams.`}
          </Typography>

          <Stack pl={2}>
            <Stack direction="row" spacing={1}>
              <Box>-</Box>
              <Typography variant="inherit">
                {`Led development of an internal application enabling real-time data analytics for Aylo's top executives.`}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Box>-</Box>
              <Typography variant="inherit">
                {`Led frontend development of the admin-site, used by Aylo's engineering team to manage the flagship
                app.`}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      }
    />
  );
};
