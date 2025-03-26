"use client";
import { Stack } from "@/components";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";
import { DashboardProvider } from "./context";
import { useEffect, useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [entranceAnimationStart, setEntranceAnimationStart] = useState<boolean>(false);

  useEffect(() => {
    if (!entranceAnimationStart) {
      setEntranceAnimationStart(true);
    }
  }, [entranceAnimationStart]);

  return (
    <DashboardProvider entranceAnimationStart={entranceAnimationStart}>
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
