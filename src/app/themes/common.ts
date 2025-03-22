import { ThemeOptions } from "@mui/material";

export const commonOptions: ThemeOptions = {
  typography: {
    fontFamily: "inherit",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
};
