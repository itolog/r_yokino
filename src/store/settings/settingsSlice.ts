import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { SettingsState, Theme } from "@/store/settings/types.ts";

// Define the initial state using that type
const initialState: SettingsState = {
  theme: "dark",
  drawerOpen: false,
};

export const counterSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    toggleDrawer: (state, action: PayloadAction<boolean>) => {
      state.drawerOpen = action.payload;
    },
  },
});

export const { setTheme, toggleDrawer } = counterSlice.actions;

export default counterSlice.reducer;
