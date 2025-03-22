import { createTheme } from "@mui/material";
import { commonOptions } from "./common";

export const lightTheme = createTheme({
  ...commonOptions,
  palette: {
    mode: "light",
  },
});
