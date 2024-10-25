"use client";

import { Stack, Typography } from "@/components";
// import { Box, Button, Chip, Stack, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Personal } from "./components/Personal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Typography } from "";

const resumeTheme = createTheme({
  palette: {
    // primary: {
    //   main: "#2196f3",
    //   light: "#64b5f6",
    //   dark: "#1976d2",
    // },
  },
});

const Resume2Page = () => {
  return (
    <ThemeProvider theme={resumeTheme}>
      <Stack
        id="resume-page"
        sx={{
          position: "relative",
          //fontFamily: "var(--font-jura), var(--font-montserrat), sans-serif",
          fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
          backgroundColor: "whitesmoke",
          //fontWeight: 400,
          width: "815px", // fits PDF width: approximate, PDF will shrink width to fit
          height: "1294px", // fits PDF height: needs to be exact, may change based on margin
          margin: "0 auto",
          boxSizing: "border-box",
          fontSize: "13px",
          //color: "rgb(60, 60, 60)",
          //letterSpacing: "0px",
        }}
      >
        <Header />

        <Stack spacing={5} p={5}>
          <Skills />

          <Experience />

          <Personal />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default Resume2Page;
