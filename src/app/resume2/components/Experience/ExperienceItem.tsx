import { Stack, Typography } from "@/components";

export const ExperienceItem = (props: {
  title: string;
  company: string;
  startEndYear: [string, string];
  content: React.ReactNode;
}) => {
  return (
    <Stack spacing={0.5}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        fontSize="1.2em"
        fontWeight={(theme) => theme.typography.fontWeightBold}
      >
        <Typography variant="inherit">{props.title}</Typography>

        <Stack direction="row" spacing={1}>
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
