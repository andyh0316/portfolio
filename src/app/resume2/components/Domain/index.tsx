import { Stack, Typography } from "@/components";

export const Domain = (props: { title: string; children: React.ReactNode }) => {
  return (
    <Stack spacing={2}>
      <Stack>
        <Typography
          fontSize="1.8em"
          fontWeight={(theme) => theme.typography.fontWeightBold}
          textTransform={"uppercase"}
          letterSpacing={"0.15em"}
          sx={{ opacity: 0.85 }}
        >
          {props.title}
        </Typography>
      </Stack>

      <Stack pl={5}>{props.children}</Stack>
    </Stack>
  );
};
