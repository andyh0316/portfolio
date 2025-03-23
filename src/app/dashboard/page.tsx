"use client";

import { Stack } from "@/components";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";
import { DashboardProvider } from "./context";

const DashboardPage = () => {
  return (
    <DashboardProvider>
      <Stack
        sx={{
          minHeight: "100vh",
          pb: 6,
        }}
      >
        <Header />

        <Projects />

        <Footer />
      </Stack>
    </DashboardProvider>
  );
};

export default DashboardPage;
