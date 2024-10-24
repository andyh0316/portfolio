import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

export const Section = (props: { title: string; body?: ReactNode; icon?: any }) => {
  return (
    <Stack spacing={2} pb={2}>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        pb={1}
        sx={{
          borderBottom: "1px solid rgb(218, 218, 218)",
          color: "#41b2cd",
        }}
      >
        {props.icon}
        <Typography variant="h6">{props.title}</Typography>
      </Stack>

      <Box px={1}>{props.body}</Box>
    </Stack>
  );
};
