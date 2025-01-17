"use client";

import { Box, Stack } from "@/components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, CSSProperties, useEffect, useState } from "react";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Personal } from "./components/Personal";
import { Skills } from "./components/Skills";

const resumeFontFamily = '"Helvetica Neue", Arial, sans-serif';
const resumeBgColor = "#fcfcfc";

// for MUI elements
const resumeTheme = createTheme({
  typography: {
    fontFamily: resumeFontFamily,
  },
  palette: {},
});

interface ResumeContextType {
  bgColor: string;
  isPdfMode: boolean;
}

export const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

const ResumePage = () => {
  // manually set mode to be printable to PDF
  const isPdfMode = true;
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
    bgColor: resumeBgColor,
    isPdfMode,
  };

  return (
    <ResumeContext.Provider value={contextValue}>
      <ThemeProvider theme={resumeTheme}>
        <Stack id="resume-page" sx={{ backgroundColor: "black" }}>
          <Stack
            sx={{
              position: "relative",
              fontFamily: resumeFontFamily,
              backgroundColor: contextValue.bgColor,
              width: "815px", // fits PDF width: approximate, PDF will shrink width to fit
              minHeight: "100vh",
              margin: "0 auto",
              boxSizing: "border-box",
              fontSize: "13px",
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
        </Stack>
      </ThemeProvider>
    </ResumeContext.Provider>
  );
};

export default ResumePage;
