import { Stack, Typography, Grid, Box } from "@/components";

export const ExperienceItem = (props: {
  title: string;
  company: string;
  startEndYear: [string, string];
  content: React.ReactNode;
}) => {
  const title = () => {
    return (
      <Typography
        variant="inherit"
        fontWeight={(theme) => theme.typography.fontWeightMedium}
        fontSize="1.2em"
        letterSpacing={"-0.01em"}
      >
        {props.title}
      </Typography>
    );
  };

  const info = () => {
    return (
      <Stack
        direction="row"
        justifyContent={{ sm: "flex-end", xs: "flex-start" }}
        spacing={1}
        fontSize="1.1em"
        letterSpacing={"-0.01em"}
      >
        <Typography variant="inherit">{props.company}:</Typography>
        <Typography variant="inherit">
          {props.startEndYear[0]} - {props.startEndYear[1]}
        </Typography>
      </Stack>
    );
  };

  return (
    <Stack spacing={1}>
      <Box borderBottom={1} borderColor={"divider"}>
        <Grid container>
          <Grid item sm={6} xs={12}>
            {title()}
          </Grid>

          <Grid item sm={6} xs={12}>
            {info()}
          </Grid>
        </Grid>
      </Box>

      <Stack fontSize="1em">{props.content}</Stack>
    </Stack>
  );
};
