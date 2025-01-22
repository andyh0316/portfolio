import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Environment = "local" | "prod";

interface AppState {
  environment: Environment | undefined;
}

const initialState: AppState = {
  environment: undefined,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setEnvironment: (state, action: PayloadAction<Environment>) => {
      state.environment = action.payload;
    },
  },
});

export const { setEnvironment } = appSlice.actions;
export default appSlice.reducer;
