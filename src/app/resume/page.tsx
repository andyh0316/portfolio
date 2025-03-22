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
import { Intro } from "./components/Intro";

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

  const resumeBody = () => {
    const sections: React.ReactElement[] = [];

    sections.push(<Intro />);
    sections.push(<Experience />);
    sections.push(<Skills />);
    sections.push(<Personal />);

    let delay = 300;
    let translateY = 0;

    return (
      <Stack spacing={2} px={5} py={2}>
        {sections.map((section, index) => {
          delay += 200;
          translateY += 50;

          return (
            <Box key={index} sx={{ ...transitionStyle({ delay: delay, translateY: translateY }) }}>
              {section}
            </Box>
          );
        })}
      </Stack>
    );
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

            {resumeBody()}
          </Stack>
        </Stack>
      </ThemeProvider>
    </ResumeProvider>
  );
};

export default ResumePage;
