"use client";

import React from "react";
import { Projects } from "./components/Projects/Projects";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Avatar,
  Chip,
  useMediaQuery,
  CssBaseline,
} from "@mui/material";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Skills } from "./components/Skills/Skills";
import { Header } from "./components/Header/Header";
import { HomeProvider } from "./context";

// Create a dark minimalist theme
// const fontFamily = '"Courier New", Courier, monospace'; // need fonts that have equal spacing for the animation
const fontFamily = '"Helvetica Neue", Arial, sans-serif';
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#BB86FC",
    },
    secondary: {
      main: "#03DAC6",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    fontFamily: "inherit",
    h1: {
      fontWeight: 300,
    },
    h2: {
      fontWeight: 300,
    },
    h5: {
      fontWeight: 300,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(30, 30, 30, 0.7)",
          backdropFilter: "blur(10px)",
          borderRadius: 12,
        },
      },
    },
  },
});

const HomePage = () => {
  return <HomeProvider>{HomeContent()}</HomeProvider>;
};

const HomeContent = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          fontFamily: fontFamily,
          // font not applying
          bgcolor: "background.default",
          color: "text.primary",
          minHeight: "100vh",
          pb: 6,
        }}
      >
        <Header />

        <Projects />

        {/* <Skills /> */}

        {/* Minimal Footer */}
        <Box
          component="footer"
          sx={{
            py: 4,
            mt: 6,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "center",
          }}
        >
          <Container>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Andy Hong
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
