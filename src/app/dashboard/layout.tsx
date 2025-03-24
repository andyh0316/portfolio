"use client";
import { Box, Dialog, Stack } from "@/components";
// app/dashboard/layout.tsx

import { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";
import { DashboardProvider } from "./context";

export default function DashboardLayout({
  children,
  nestedChildren,
}: {
  children: React.ReactNode;
  nestedChildren: React.ReactNode;
}) {
  const [dashboardFlag, setDashboardFlag] = useState<boolean>(false);
  debugger;

  // return (
  //   <Box>
  //     <Button onClick={() => setDashboardFlag(!dashboardFlag)} variant="outlined">
  //       Flag {dashboardFlag ? "true" : "false"}
  //     </Button>

  //     <Box>{children}</Box>
  //   </Box>
  // );

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

        {/* This is where nested route content will appear */}
        {children}
      </Stack>
    </DashboardProvider>
  );
}
