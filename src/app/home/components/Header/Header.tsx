"use client";

import { Box, Stack, Typography } from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { HomeContext } from "../../context";
import { MyName } from "./MyName/MyName";

// transition
// "AH" fades in centerered
// "AH" expands into "Andy Hong"
// "Andy Hong" zooms out and repositions into section of text
export function Header() {
  const homeContext = useContext(HomeContext);
  const outerBoxRef = useRef<HTMLDivElement>(null);
  const moveMyNameToRef = useRef<HTMLDivElement>(null);

  const [fullNameElement, setFullNameElement] = useState<ReactElement>();

  const firstName = "Andy";
  const lastName = "Hong";

  const [boxDimensions, setBoxDimensions] = useState({ width: 0, height: 0 });

  // Function to measure dimensions
  useEffect(() => {
    if (outerBoxRef.current) {
      const { offsetWidth, offsetHeight } = outerBoxRef.current;
      setBoxDimensions({
        width: offsetWidth,
        height: offsetHeight,
      });
      console.log(`Box dimensions: ${offsetWidth}px × ${offsetHeight}px`);
    }
  }, []);

  return (
    <Box
      position="relative"
      ref={outerBoxRef}
      width="100%"
      // minHeight="100vh"
      // border={20}
      // p={10}
    >
      <MyName
        firstName={firstName}
        lastName={lastName}
        onAnimationCompleted={(textElement) => {
          setFullNameElement(textElement);
        }}
      />

      {/* <Box position="absolute" left="50%" border={1} width={2} height="100%">
        
      </Box> */}

      <Stack fontSize={"2rem"}>
        <Stack position="relative" direction="row">
          <Box>{`Hello, my name is\u00A0`}</Box>

          {fullNameElement && (
            <AnimatePresence>
              <Box layoutId={homeContext?.nameContainerLayoutId} ref={moveMyNameToRef} component={motion.div}>
                {fullNameElement}
              </Box>
            </AnimatePresence>
          )}
        </Stack>
        <Box>I am a Software Engineer</Box>
      </Stack>

      <Stack>
        <Typography>width: {boxDimensions.width}</Typography>
        <Typography>height: {boxDimensions.height}</Typography>

        {/* <Box>
          <Button onClick={() => setExpandName(true)} variant="outlined">
            Expand Name
          </Button>
        </Box> */}
      </Stack>
    </Box>
  );
}
