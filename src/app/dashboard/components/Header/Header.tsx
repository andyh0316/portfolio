"use client";

import { Avatar, Box, Button, Container, Grid, Stack, Typography } from "@/components";
import { setThemeType } from "@/store/features/appSlice";
import { useAppSelector } from "@/store/hooks";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { AnimatedName } from "./AnimatedName/AnimatedName";

export function Header() {
  const themeType = useAppSelector((state) => state.app.themeType);
  const dispatch = useDispatch();
  const theme = useTheme();

  function infoElement() {
    return (
      <Stack>
        <AnimatedName
          skipAnimation={true} // skip for development
        />

        <Typography
          variant="h5"
          sx={{
            maxWidth: "600px",
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          Software Engineer in full-stack web applications.
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
          {/* <GitHubIcon />
          <LinkedInIcon />
          <TwitterIcon /> */}
        </Box>

        <Stack direction="row" spacing={1}>
          {/* {resumeButton()} */}

          {githubButton()}

          {lightButton()}
        </Stack>
      </Stack>
    );
  }

  function avatarElement() {
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
  }

  function githubButton() {
    const handleClick = () => {
      const confirmed = window.confirm("You're about to open a tab to an external URL. Continue?");

      if (confirmed) {
        window.open("https://github.com/andyh0316/portfolio", "_blank", "noopener,noreferrer");
      }
    };

    return (
      <Button onClick={handleClick} variant="outlined">
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography variant="inherit">Github</Typography>

          <GitHubIcon fontSize="small" />
        </Stack>
      </Button>
    );
  }

  function lightButton() {
    const isDark = themeType === "dark";
    const text = isDark ? "Lights On" : "Lights Off";
    const icon = isDark ? <LightbulbIcon fontSize="small" /> : <LightbulbOutlinedIcon fontSize="small" />;

    return (
      <Button
        onClick={() => {
          dispatch(setThemeType(themeType === "dark" ? "light" : "dark"));
        }}
        variant="outlined"
      >
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography variant="inherit">{text}</Typography>

          {icon}
        </Stack>
      </Button>
    );
  }

  function resumeButton() {
    return (
      <Button onClick={() => {}} variant="outlined">
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography variant="inherit">Resume (?)</Typography>

          <PictureAsPdfIcon fontSize="small" />
        </Stack>
      </Button>
    );
  }

  return (
    <Box
      sx={{
        pt: 12,
        pb: 10,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            {infoElement()}
          </Grid>

          {/* <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
            {avatarElement()}
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
}
