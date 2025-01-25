import { Box, Stack, Typography } from "@/components";
import { ReactNode } from "react";

export const Domain = (props: { title: ReactNode; afterTitle?: ReactNode; children: React.ReactNode }) => {
  return (
    <Stack spacing={1}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box
          fontSize="1.8em"
          fontWeight={(theme) => theme.typography.fontWeightBold}
          textTransform={"uppercase"}
          letterSpacing={"0.15em"}
          sx={{ opacity: 0.85 }}
        >
          {props.title}
        </Box>

        <Stack direction="row" flexGrow={1}>
          {props.afterTitle}
        </Stack>
      </Stack>

      <Stack
        pl={{ xs: 0, sm: 3 }} // no ident on small devices
      >
        {props.children}
      </Stack>
    </Stack>
  );
};
