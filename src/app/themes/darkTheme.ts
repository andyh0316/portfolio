import { createTheme } from "@mui/material/styles";
import { commonOptions } from "./common";

export const darkTheme = createTheme({
  ...commonOptions,
  palette: {
    mode: "dark",
  },
});
