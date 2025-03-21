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
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
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
          // font not applying
          // fontFamily: '"Courier New", Courier, monospace', // need fonts that have equal spacing for the animation
          bgcolor: "background.default",
          color: "text.primary",
          minHeight: "100vh",
          pb: 6,
        }}
      >
        {/* Hero Section */}
        {/* <Box
          sx={{
            pt: 12,
            pb: 10,
            background: "linear-gradient(135deg, #121212 0%, #1E1E1E 100%)",
            position: "relative",
            overflow: "hidden",
            "&::after": {
              content: '""',
              position: "absolute",
              top: "-50%",
              right: "-10%",
              width: "60%",
              height: "200%",
              background: "radial-gradient(ellipse at center, rgba(187, 134, 252, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
              zIndex: 0,
              borderRadius: "50%",
            },
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography
                  component="h1"
                  variant="h2"
                  color="text.primary"
                  gutterBottom
                  sx={{
                    fontWeight: 300,
                    letterSpacing: 1.5,
                  }}
                >
                  Developer Name
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  paragraph
                  sx={{
                    maxWidth: "600px",
                    lineHeight: 1.6,
                    mb: 4,
                  }}
                >
                  Full Stack Developer specializing in modern web applications with a focus on React, Node.js, and cloud
                  technologies.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    mt: 4,
                    "& svg": {
                      fontSize: 28,
                      transition: "all 0.2s",
                      "&:hover": {
                        color: "primary.main",
                        transform: "translateY(-3px)",
                      },
                    },
                  }}
                >
                  <GitHubIcon />
                  <LinkedInIcon />
                  <TwitterIcon />
                </Box>
              </Grid>
              <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar
                  sx={{
                    width: { xs: 200, md: 280 },
                    height: { xs: 200, md: 280 },
                    boxShadow: "0 0 30px rgba(187, 134, 252, 0.3)",
                    border: "4px solid rgba(255, 255, 255, 0.1)",
                  }}
                  alt="Developer Name"
                  src="/path-to-profile-image.jpg"
                />
              </Grid>
            </Grid>
          </Container>
        </Box> */}

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
