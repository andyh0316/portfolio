import { Box, Stack, Typography } from "@/components";
import { ReactNode } from "react";

export const Domain = (props: { title: ReactNode; children: React.ReactNode }) => {
  return (
    <Stack spacing={0.75}>
      <Box
        fontSize="1.5em"
        fontWeight={(theme) => theme.typography.fontWeightBold}
        textTransform={"uppercase"}
        letterSpacing={"0.15em"}
        sx={{ opacity: 0.85 }}
        borderBottom={1}
        borderColor={"divider"}
      >
        {props.title}
      </Box>

      <Stack
        pl={{ xs: 0, sm: 0 }} // no ident on small devices
      >
        {props.children}
      </Stack>
    </Stack>
  );
};
