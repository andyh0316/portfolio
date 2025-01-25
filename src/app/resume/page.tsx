"use client";

import { Box, Stack } from "@/components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CSSProperties, useEffect, useState } from "react";
import { BackgroundContent } from "./components/BackgroundContent";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Personal } from "./components/Personal";
import { Skills } from "./components/Skills";
import { ResumeProvider } from "./context";

const resumeBgColor = "#fcfcfc";

// for MUI elements
const resumeTheme = createTheme({
  palette: {
    primary: {
      main: "#275070",
    },
  },
});

const ResumePage = () => {
  const [isInitialResumeMount, setIsInitialResumeMount] = useState(false);
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setIsInitialResumeMount(true);
  }, []);

  const transitionStyle = (params: { delay: number; translateY: number }): CSSProperties => {
    return {
      opacity: isInitialResumeMount ? 1 : 0,
      transform: isInitialResumeMount ? "translateY(0)" : `translateY(${params.translateY}px)`,
      transition: `opacity 500ms ease-out ${params.delay}ms, transform 300ms ease-in-out ${params.delay}ms`,
    };
  };

  return (
    <ResumeProvider bgColor={resumeBgColor}>
      <ThemeProvider theme={resumeTheme}>
        <Stack id="resume-page" sx={{ backgroundColor: "black" }}>
          <BackgroundContent backToResume={() => setVisible(true)} />

          <Stack
            sx={{
              position: "relative",
              backgroundColor: resumeBgColor,
              maxWidth: expanded ? "100%" : "815px", // fits PDF width: approximate, PDF will shrink width to fit
              visibility: visible ? "visible" : "hidden",
              minHeight: "100vh",
              margin: "0 auto",
              boxSizing: "border-box",
              fontSize: "13px",
              transition: "max-width 150ms ease-in-out",
            }}
          >
            <Box sx={{ ...transitionStyle({ delay: 0, translateY: 0 }) }}>
              <Header onExpand={() => setExpanded(!expanded)} onClose={() => setVisible(false)} />
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
    </ResumeProvider>
  );
};

export default ResumePage;
