"use client";
import { Stack } from "@/components";
import { useEffect, useRef } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";
import { DashboardProvider } from "./context";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount) {
      isFirstMount.current = false;
    }
  }, []);

  return (
    <DashboardProvider isLayoutFirstMount={isFirstMount}>
      <Stack
        sx={{
          minHeight: "100vh",
          pb: 6,
        }}
      >
        <Header />

        <Projects />

        <Footer />

        {/* This is where nested route content will appear */}
        {children}
      </Stack>
    </DashboardProvider>
  );
}
