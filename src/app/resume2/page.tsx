"use client";

import { Stack, Typography } from "@/components";
// import { Box, Button, Chip, Stack, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
// import { Typography } from "";

const Resume2Page = () => {
  const renderHeader = () => {
    return (
      <Stack
        direction="row"
        px={5}
        justifyContent={"space-between"}
        alignItems={"center"}
        height="200px"
        bgcolor="#cad8e3"
      >
        <Stack>
          <Typography fontSize="2em" fontWeight={(theme) => theme.typography.fontWeightRegular} letterSpacing="0.07em">
            ANDY HONG
          </Typography>
          <Typography
            fontSize="0.9em"
            lineHeight="100%"
            fontWeight={(theme) => theme.typography.fontWeightRegular}
            letterSpacing="0.14em"
          >
            FULL STACK DEVELOPER
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <EmailIcon sx={{ color: "#43929c" }} />
          <Typography fontSize="0.7em">NoSpamPlease2222@gmail.com</Typography>
        </Stack>
      </Stack>
    );
  };

  const renderExperience = () => {
    return (
      <Stack direction="row">
        <Stack>
          <Typography fontSize="1.5em">Experience</Typography>

          {/* <TextField label="Experience" />

          <Chip label="Experience" />

          <Button>Experience</Button> */}
        </Stack>
      </Stack>
    );
  };

  return (
    <Stack
      id="resume-page"
      sx={{
        position: "relative",
        // fontFamily:
        //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        backgroundColor: "whitesmoke",
        fontWeight: 500,
        width: "815px", // fits PDF width: approximate, PDF will shrink width to fit
        height: "1294px", // fits PDF height: needs to be exact, may change based on margin
        margin: "0 auto",
        boxSizing: "border-box",
        fontSize: "18px",
        color: "rgb(60, 60, 60)",
        letterSpacing: "0px",
      }}
    >
      {renderHeader()}

      <Stack spacing={5} p={5}>
        {renderExperience()}
      </Stack>
    </Stack>
  );
};

export default Resume2Page;
