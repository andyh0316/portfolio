"use client";

import { Stack } from "@/components";
import { HomeContext, HomeProvider } from "./context";
import { useContext } from "react";
import { Header } from "./components/Header/Header";
import { Skills } from "./components/Skills/Skills";

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
      // spacing={20}
    >
      {/* <CodeDisplay /> */}

      <Header />

      <Skills />
    </Stack>
  );
}

export default HomePage;
