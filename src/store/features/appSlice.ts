import { Environment, ThemeType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  themeType: ThemeType;
  environment: Environment;
}

const initialState: AppState = {
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT as Environment,
  themeType: "dark",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setEnvironment: (state, action: PayloadAction<Environment>) => {
      state.environment = action.payload;
    },
    setThemeType: (state, action: PayloadAction<ThemeType>) => {
      state.themeType = action.payload;
    },
  },
});

export const { setEnvironment, setThemeType } = appSlice.actions;
export default appSlice.reducer;
