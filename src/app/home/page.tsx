"use client";

import { Stack } from "@/components";
import { Header } from "./components/Header";

const HomePage = () => {
  return (
    <Stack
      sx={{
        fontFamily: '"Courier New", Courier, monospace', // need fonts that have equal spacing for the animation
        // fontSize: 20
      }}
    >
      <Header />
    </Stack>
  );
};

export default HomePage;
