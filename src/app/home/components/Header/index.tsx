"use client";

import { Box, Stack, Typography, Button } from "@/components";
import { BoxProps, SxProps, Theme } from "@mui/material";
import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { MyName } from "./MyName";
import { AnimatePresence, motion } from "framer-motion";
import { HomeContext } from "../../context";

// transition
// "AH" fades in centerered
// "AH" expands into "Andy Hong"
// "Andy Hong" zooms out and repositions into section of text
export function Header() {
  const homeContext = useContext(HomeContext);
  const outerBoxRef = useRef<HTMLDivElement>(null);
  const myNameRef = useRef<HTMLDivElement>(null);
  const moveMyNameToRef = useRef<HTMLDivElement>(null);

  const [fullNameElement, setFullNameElement] = useState<ReactElement>();
  const [fullNameHtml, setFullNameHtml] = useState<string>();

  const myNameInitial = "AH";
  const myNameFinal = "Andy Hong";

  const firstName = "Andy";
  const lastName = "Hong";

  const [boxDimensions, setBoxDimensions] = useState({ width: 0, height: 0 });

  const [centerName, setCenterName] = useState<boolean>(true);
  const [expandName, setExpandName] = useState<boolean>(false);

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
      p={10}
    >
      <MyName
        moveTextToRef={moveMyNameToRef}
        firstName={firstName}
        lastName={lastName}
        onCompleted={(textElement) => {
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

          {/* {homeContext?.isNameMoved === true && (
            <motion.div
              layoutId="moving-element"
              style={{
                position: "relative",
                left: 0,
                top: 0,
                width: 50,
                height: 50,
                background: "blue",
                transform: "scale(3)",
              }}
            />
          )} */}

          {/* <Box
            ref={myNameRef}
            onClick={() => setCenterName(false)}
            border={1}
            position="relative"
            top={0}
            left={0}
            sx={{
              ...(centerName ? centeredNameSx : nameUncenteredSx),
              transition: "top 0.6s ease-out, left 0.6s ease-out, transform 0.6s ease-out, position 0.1s linear",
            }}
          >
            {myNameInitial}
          </Box> */}
        </Stack>
        <Box>I am a Software Engineer</Box>
      </Stack>

      <Stack>
        <Typography>width: {boxDimensions.width}</Typography>
        <Typography>height: {boxDimensions.height}</Typography>

        <Box>
          <Button onClick={() => setExpandName(true)} variant="outlined">
            Expand Name
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
