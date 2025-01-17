"use client";

import { Box, Stack, Typography } from "@/components";
// import { Box, Button, Chip, Stack, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Personal } from "./components/Personal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, CSSProperties, useEffect, useState } from "react";
// import { Typography } from "";

// const resumeFontFamily = 'Roboto, "Helvetica Neue", Arial, sans-serif';
const resumeFontFamily = '"Helvetica Neue", Arial, sans-serif';

// for MUI elements
const resumeTheme = createTheme({
  typography: {
    // fontFamily: 'Arial, sans-serif',
    fontFamily: resumeFontFamily,
  },
  palette: {
    // primary: {
    //   main: "#2196f3",
    //   light: "#64b5f6",
    //   dark: "#1976d2",
    // },
  },
});

interface ResumeContextType {
  bgColor: string;
}

export const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

const ResumePage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const transitionStyle = (params: { delay: number; translateY: number }): CSSProperties => {
    return {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : `translateY(${params.translateY}px)`,
      transition: `opacity 500ms ease-out ${params.delay}ms, transform 300ms ease-in-out ${params.delay}ms`,
    };
  };

  const contextValue: ResumeContextType = {
    bgColor: "whitesmoke",
  };

  return (
    <ResumeContext.Provider value={contextValue}>
      <ThemeProvider theme={resumeTheme}>
        <Stack
          id="resume-page"
          sx={{
            position: "relative",
            // fontFamily: "var(--font-jura), var(--font-montserrat), sans-serif",
            // fontFamily: 'Arial, sans-serif',
            fontFamily: resumeFontFamily,
            backgroundColor: "whitesmoke",
            //fontWeight: 400,
            width: "815px", // fits PDF width: approximate, PDF will shrink width to fit
            // height: "1294px", // fits PDF height: needs to be exact, may change based on margin
            margin: "0 auto",
            boxSizing: "border-box",
            fontSize: "13px",
            //color: "rgb(60, 60, 60)",
            //letterSpacing: "0px",
            borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
            borderRight: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box sx={{ ...transitionStyle({ delay: 0, translateY: 0 }) }}>
            <Header />
          </Box>

          <Stack spacing={5} p={5}>
            <Box sx={{ ...transitionStyle({ delay: 500, translateY: 50 }) }}>
              <Skills />
            </Box>

            <Box sx={{ ...transitionStyle({ delay: 700, translateY: 100 }) }}>
              <Experience />
            </Box>

            <Box sx={{ ...transitionStyle({ delay: 800, translateY: 150 }) }}>
              <Personal />
            </Box>
          </Stack>
        </Stack>
      </ThemeProvider>
    </ResumeContext.Provider>
  );
};

export default ResumePage;
