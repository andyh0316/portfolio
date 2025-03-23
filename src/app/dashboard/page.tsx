"use client";

import { Box, Container, Typography } from "@/components";
import { useTheme } from "@mui/material/styles";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";
import { DashboardProvider } from "./context";

const DashboardPage = () => {
  return (
    <DashboardProvider>
      <Box
        sx={{
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
    </DashboardProvider>
  );
};

export default DashboardPage;
