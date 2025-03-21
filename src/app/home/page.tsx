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

const HomePage = () => {
  return <HomeProvider>{HomeContent()}</HomeProvider>;
};

const HomeContent = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        // fontFamily: fontFamily,
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
          borderTop: "1px solid rgba(0, 0, 0, 0.1)",
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
  );
};

export default HomePage;
