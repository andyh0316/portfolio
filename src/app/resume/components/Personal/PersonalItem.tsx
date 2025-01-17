import { Stack, Typography } from "@/components";
import React from "react";

export const PersonalItem = (props: { title: string; content: React.ReactNode }) => {
  return (
    <Stack direction="row" spacing={1}>
      <Typography variant="inherit" fontWeight={(theme) => theme.typography.fontWeightBold}>
        {props.title}:
      </Typography>

      <Typography variant="inherit">{props.content}</Typography>
    </Stack>
  );
};
