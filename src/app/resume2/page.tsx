"use client";

import { Stack, Typography } from "@/components";
// import { Box, Button, Chip, Stack, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Personal } from "./components/Personal";
// import { Typography } from "";

const Resume2Page = () => {
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
        fontSize: "14px",
        color: "rgb(60, 60, 60)",
        letterSpacing: "0px",
      }}
    >
      <Header />

      <Stack spacing={5} p={5}>
        <Skills />

        <Experience />

        <Personal />
      </Stack>
    </Stack>
  );
};

export default Resume2Page;
