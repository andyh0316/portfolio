"use client";

import React from "react";
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
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "CSS/SCSS", level: 75 },
    { name: "TypeScript", level: 70 },
    { name: "GraphQL", level: 65 },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with user authentication, product management, and payment processing.",
      image: "https://via.placeholder.com/300x180",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team workflow capabilities.",
      image: "https://via.placeholder.com/300x180",
      technologies: ["React", "Firebase", "Material-UI"],
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing projects and skills with dynamic content loading.",
      image: "https://via.placeholder.com/300x180",
      technologies: ["Next.js", "Material-UI", "Framer Motion"],
    },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          minHeight: "100vh",
          pb: 6,
        }}
      >
        {/* Hero Section */}
        <Box
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
        </Box>

        {/* Skills Section */}
        <Box sx={{ py: 10, position: "relative" }}>
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 6, fontWeight: 300, letterSpacing: 1 }}>
              <Box component="span" sx={{ color: "primary.main", mr: 1 }}>
                {"{"}
              </Box>
              Skills
              <Box component="span" sx={{ color: "primary.main", ml: 1 }}>
                {"}"}
              </Box>
            </Typography>
            <Grid container spacing={3}>
              {skills.map((skill) => (
                <Grid item xs={12} sm={6} md={4} key={skill.name}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      background: "rgba(30, 30, 30, 0.6)",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                        <CodeIcon color="primary" />
                        <Typography variant="h6" sx={{ fontWeight: 400 }}>
                          {skill.name}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          position: "relative",
                          height: 6,
                          bgcolor: "rgba(255,255,255,0.1)",
                          borderRadius: 5,
                          mb: 1,
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: `${skill.level}%`,
                            background: "linear-gradient(90deg, #BB86FC 0%, #3700B3 100%)",
                            borderRadius: 5,
                          }}
                        />
                      </Box>
                      <Typography variant="body2" sx={{ mt: 1, textAlign: "right", color: "text.secondary" }}>
                        {skill.level}%
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Projects Section */}
        <Box sx={{ py: 10, position: "relative" }}>
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 6, fontWeight: 300, letterSpacing: 1 }}>
              <Box component="span" sx={{ color: "secondary.main", mr: 1 }}>
                {"<"}
              </Box>
              Projects
              <Box component="span" sx={{ color: "secondary.main", ml: 1 }}>
                {"/>"}
              </Box>
            </Typography>
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      background: "rgba(30, 30, 30, 0.5)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                        "& .MuiCardMedia-root": {
                          transform: "scale(1.05)",
                        },
                      },
                    }}
                    elevation={0}
                  >
                    <Box sx={{ overflow: "hidden" }}>
                      <CardMedia
                        component="img"
                        height="180"
                        image={project.image}
                        alt={project.title}
                        sx={{
                          transition: "transform 0.5s ease",
                        }}
                        className="MuiCardMedia-root"
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 400 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 3 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: "rgba(187, 134, 252, 0.15)",
                              color: "primary.light",
                              "&:hover": {
                                bgcolor: "rgba(187, 134, 252, 0.25)",
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

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
              © {new Date().getFullYear()} Developer Name
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
