import { Stack, Typography } from "@/components";

export const ExperienceItem = (props: {
  title: string;
  company: string;
  startEndYear: [string, string];
  content: React.ReactNode;
}) => {
  return (
    <Stack spacing={0.5}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          variant="inherit"
          fontWeight={(theme) => theme.typography.fontWeightMedium}
          fontSize="1.2em"
          letterSpacing={"-0.01em"}
        >
          {props.title}
        </Typography>

        <Stack direction="row" spacing={1} fontSize="1.1em" letterSpacing={"-0.01em"}>
          <Typography variant="inherit">{props.company}:</Typography>
          <Typography variant="inherit">
            {props.startEndYear[0]} - {props.startEndYear[1]}
          </Typography>
        </Stack>
      </Stack>

      <Stack fontSize="1em">{props.content}</Stack>
    </Stack>
  );
};
