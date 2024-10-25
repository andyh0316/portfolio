import { Stack, Typography } from "@/components";

export const Domain = (props: { title: string; children: React.ReactNode }) => {
  return (
    <Stack spacing={1}>
      <Stack>
        <Typography fontSize="1.8em" fontWeight={(theme) => theme.typography.fontWeightBold}>
          {props.title}
        </Typography>
      </Stack>

      <Stack>{props.children}</Stack>
    </Stack>
  );
};
