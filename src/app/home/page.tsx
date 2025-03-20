"use client";

import { Stack } from "@/components";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { HomeContext, HomeProvider } from "./context";
import { useContext } from "react";

const HomePage = () => {
  return <HomeProvider>{HomeContent()}</HomeProvider>;
};

function HomeContent() {
  return (
    <Stack
      sx={{
        fontFamily: '"Courier New", Courier, monospace', // need fonts that have equal spacing for the animation
        // fontSize: 20
      }}
      spacing={20}
    >
      <Header />

      <Skills />
    </Stack>
  );
}

export default HomePage;
