"use client";

import { Box, Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const Resume2Page = () => {
  const renderHeader = () => {
    return (
      <Stack
        direction="row"
        px={4}
        justifyContent={"space-between"}
        alignItems={"center"}
        height="200px"
        bgcolor="#cad8e3"
      >
        <Stack>
          <Typography
            variant="inherit"
            fontSize="2em"
            fontWeight={(theme) => theme.typography.fontWeightRegular}
            letterSpacing="0.07em"
            // sx={{
            //   background: "linear-gradient(30deg, #9ED8DB 40%, #007B82 70%)",
            //   backgroundClip: "text",
            //   color: "transparent"
            // }}
          >
            ANDY HONG
          </Typography>
          <Typography
            variant="inherit"
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
          <Typography variant="inherit" fontSize="0.7em" fontWeight={(theme) => theme.typography.fontWeightRegular}>
            NoSpamPlease2222@gmail.com
          </Typography>
        </Stack>
      </Stack>
    );
  };

  return (
    <Stack
      id="resume-page"
      sx={{
        position: "relative",
        fontFamily: "var(--font-montserrat), sans-serif",
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
      resume 2
    </Stack>
  );
};

export default Resume2Page;
