"use client";

import { useAppSelector } from "@/store/hooks";
import { ReduxProvider } from "@/store/providers/redux-provider";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppStateInitializer } from "./AppStateInitializer";
import "./globals.css";
import { darkTheme } from "./themes/darkTheme";
import { lightTheme } from "./themes/lightTheme";

export function App(props: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <AppStateInitializer />
      <ThemedApp>{props.children}</ThemedApp>
    </ReduxProvider>
  );
}

function ThemedApp(props: { children: React.ReactNode }) {
  const themeType = useAppSelector((state) => state.app.themeType);
  const theme = themeType === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}
