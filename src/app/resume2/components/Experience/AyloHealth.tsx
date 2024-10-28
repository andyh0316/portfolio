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
            Full-stack developer managing multiple high-impact projects while collaborating with cross-functional teams.
          </Typography>

          <Stack pl={2}>
            <Typography variant="inherit">
              - Developed and launched an internal application enabling real-time data analytics and custom reporting
              for Aylo's top executives.
            </Typography>
            <Typography variant="inherit">
              - Led frontend development of the admin-site, used by Aylo's engineering team to manage the flagship
              product.
            </Typography>
          </Stack>
        </Stack>
      }
    />
  );
};
