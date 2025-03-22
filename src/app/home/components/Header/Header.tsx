"use client";

import { Box, Stack, Typography } from "@/components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, Container, Grid, useTheme } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { HomeContext } from "../../context";
import { alpha } from "@mui/material/styles";
import { AnimatedName } from "./AnimatedName/AnimatedName";

// transition
// "AH" fades in centerered
// "AH" expands into "Andy Hong"
// "Andy Hong" zooms out and repositions into section of text
export function Header() {
  const theme = useTheme();
  const homeContext = useContext(HomeContext);
  const outerBoxRef = useRef<HTMLDivElement>(null);
  const moveMyNameToRef = useRef<HTMLDivElement>(null);

  const [finalizedName, setFinalizedName] = useState<ReactElement>();
  const [nameAnimationCompleted, setNameAnimationCompleted] = useState<boolean>(false);

  const firstName = "Andy";
  const lastName = "Hong";

  const [boxDimensions, setBoxDimensions] = useState({ width: 0, height: 0 });
  const handOverNameAnimationDuration = 0.5;

  // Function to measure dimensions
  useEffect(() => {
    if (outerBoxRef.current) {
      const { offsetWidth, offsetHeight } = outerBoxRef.current;
      setBoxDimensions({
        width: offsetWidth,
        height: offsetHeight,
      });
    }
  }, []);

  const infoElement = () => {
    return (
      <Stack>
        <AnimatedName
          skipAnimation={false} // skip for development
          firstName={firstName}
          lastName={lastName}
          handoverNameDuration={handOverNameAnimationDuration}
          handoverNameToParent={(textElement) => {
            // setFinalizedName(textElement);
            // setTimeout(() => {
            //   setNameAnimationCompleted(true);
            // }, handOverNameAnimationDuration * 1000);
          }}
        />

        {/* <AnimatePresence>
          <Box
            layoutId={homeContext?.nameContainerLayoutId}
            ref={moveMyNameToRef}
            component={motion.div}
            transition={{
              duration: handOverNameAnimationDuration,
              ease: "easeInOut",
            }}
            sx={{
              width: "fit-content",
              fontSize: "4rem",
            }}
          >
            {finalizedName}
            {!finalizedName && "\u00A0"}
          </Box>
        </AnimatePresence> */}
        <Typography
          variant="h5"
          color="text.primary"
          paragraph
          sx={{
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          Software Engineer.
        </Typography>
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
          // boxShadow: `0 0 30px ${theme.palette.primary.main}40`,
          border: `4px solid ${theme.palette.divider}`,
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
        position: "relative",
        overflow: "hidden",
        // bgcolor: (theme) => "#f0f0f0",
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
    </Box>
  );
}
