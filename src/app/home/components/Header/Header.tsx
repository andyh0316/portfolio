"use client";

import { Box, Typography, Stack } from "@/components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, Container, Grid } from "@mui/material";
import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { HomeContext } from "../../context";
import { MyName } from "./MyName/MyName";
import { AnimatePresence, motion } from "framer-motion";

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
      // console.log(`Box dimensions: ${offsetWidth}px × ${offsetHeight}px`);
    }
  }, []);

  const infoElement = () => {
    return (
      <Stack>
        {" "}
        {/* <Typography
          component="h1"
          variant="h2"
          color="text.primary"
          gutterBottom
          sx={{
            fontWeight: 300,
            letterSpacing: 1.5,
          }}
        >
          Developer Name
        </Typography> */}
        <AnimatePresence>
          <Box
            layoutId={homeContext?.nameContainerLayoutId}
            ref={moveMyNameToRef}
            component={motion.div}
            sx={{
              width: "fit-content",
              fontSize: "4rem",
              // fontWeight: 300,
              // letterSpacing: 1.5,
            }}
            // border={1}
          >
            {fullNameElement}
            {!fullNameElement && "\u00A0"}
          </Box>
        </AnimatePresence>
        <Typography
          variant="h5"
          color="text.secondary"
          paragraph
          sx={{
            maxWidth: "600px",
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          Full Stack Developer specializing in modern web applications with a focus on React, Node.js, and cloud
          technologies.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            mt: 4,
            "& svg": {
              fontSize: 28,
              transition: "all 0.2s",
              "&:hover": {
                color: "primary.main",
                transform: "translateY(-3px)",
              },
            },
          }}
        >
          <GitHubIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </Box>
      </Stack>
    );
  };

  const avatarElement = () => {
    return (
      <Avatar
        sx={{
          width: { xs: 200, md: 280 },
          height: { xs: 200, md: 280 },
          boxShadow: "0 0 30px rgba(187, 134, 252, 0.3)",
          border: "4px solid rgba(255, 255, 255, 0.1)",
        }}
        alt="Developer Name"
        src="/path-to-profile-image.jpg"
      />
    );
  };

  return (
    <Box
      sx={{
        pt: 12,
        pb: 10,
        background: "linear-gradient(135deg, #121212 0%, #1E1E1E 100%)",
        position: "relative",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "60%",
          height: "200%",
          background: "radial-gradient(ellipse at center, rgba(187, 134, 252, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
          zIndex: 0,
          borderRadius: "50%",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            {infoElement()}
          </Grid>

          <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
            {avatarElement()}
          </Grid>
        </Grid>
      </Container>

      {!fullNameElement && (
        <MyName
          firstName={firstName}
          lastName={lastName}
          onAnimationCompleted={(textElement) => {
            setFullNameElement(textElement);
          }}
        />
      )}
    </Box>
  );

  // return (
  //   <Box
  //     position="relative"
  //     ref={outerBoxRef}
  //     width="100%"
  //   >
  //     <MyName
  //       firstName={firstName}
  //       lastName={lastName}
  //       onAnimationCompleted={(textElement) => {
  //         setFullNameElement(textElement);
  //       }}
  //     />

  //     <Stack fontSize={"2rem"}>
  //       <Stack position="relative" direction="row">
  //         <Box>{`Hello, my name is\u00A0`}</Box>

  //         {fullNameElement && (
  //           <AnimatePresence>
  //             <Box layoutId={homeContext?.nameContainerLayoutId} ref={moveMyNameToRef} component={motion.div}>
  //               {fullNameElement}
  //             </Box>
  //           </AnimatePresence>
  //         )}
  //       </Stack>
  //       <Box>I am a Software Engineer</Box>
  //     </Stack>

  //     <Stack>
  //       <Typography>width: {boxDimensions.width}</Typography>
  //       <Typography>height: {boxDimensions.height}</Typography>
  //     </Stack>
  //   </Box>
  // );
}
