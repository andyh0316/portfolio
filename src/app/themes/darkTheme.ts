import { createTheme } from "@mui/material/styles";
import { commonOptions } from "./common";

export const darkTheme = createTheme({
  ...commonOptions,
  palette: {
    mode: "dark",
    primary: {
      main: "#64ffda", // Teal accent color
    },
    secondary: {
      main: "#64ffda", // Same teal for secondary
    },
    background: {
      // default: "#112240",
      // paper: "#0a192f",
      default: "#0a192f",
      paper: "#112240",
    },
    text: {
      primary: "#e6f1ff", // Almost white text
      secondary: "#8892b0", // Lighter blue-gray text
    },
    divider: "rgba(136, 146, 176, 0.15)",
  },
});
