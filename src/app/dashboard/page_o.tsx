"use client";

import { Box, Stack } from "@/components";
import { HomeContext, HomeProvider } from "./context";
import { useContext } from "react";
import { Header } from "./components/Header/Header";
import { Skills } from "./components/Skills/Skills";
import { TestComp } from "./components/TestComp/TestComp";

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

      {/* <TestComp /> */}

      <Box position="absolute" left="50%" border={1} width={2} height="100%"></Box>

      <Header />

      <Skills />
    </Stack>
  );
}

export default HomePage;
