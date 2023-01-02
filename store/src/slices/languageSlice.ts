import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface LanguageState {
  activeLanguage: string;
}

const initialState: LanguageState = {
  activeLanguage: "en",
};

export const LanguageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.activeLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = LanguageSlice.actions;

export const selectLanguaje = (state: RootState) =>
  state.language.activeLanguage;

export default LanguageSlice.reducer;
