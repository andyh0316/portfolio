import { Box, Stack, Typography } from "@/components";
import { ReactNode } from "react";

export const Domain = (props: { title: ReactNode; children: React.ReactNode }) => {
  return (
    <Stack spacing={2}>
      <Stack>
        <Box
          fontSize="1.8em"
          fontWeight={(theme) => theme.typography.fontWeightBold}
          textTransform={"uppercase"}
          letterSpacing={"0.15em"}
          sx={{ opacity: 0.85 }}
        >
          {props.title}
        </Box>
      </Stack>

      <Stack pl={5}>{props.children}</Stack>
    </Stack>
  );
};
