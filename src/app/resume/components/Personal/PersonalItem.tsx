import { Box, Stack, Typography } from "@/components";
import React from "react";

export const PersonalItem = (props: { title: string; content: React.ReactNode }) => {
  return (
    <Stack direction="row" spacing={1}>
      <Box width="100px" flexShrink={0}>
        <Typography variant="inherit" fontWeight={(theme) => theme.typography.fontWeightBold}>
          {props.title}:
        </Typography>
      </Box>

      <Box>
        <Typography variant="inherit">{props.content}</Typography>
      </Box>
    </Stack>
  );
};
