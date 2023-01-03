import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ApiFetch } from "../../api/fetch";
import type { RootState } from "../store";
import { ItemProps } from ".././../types";
import { RAM_API_URL } from "../../constants";

interface RAMCharacterState {
  charactersSpanish: Array<ItemProps>;
  charactersEnglish: Array<ItemProps>;
  currentCharacters: Array<ItemProps>;
  loading: boolean;
}

const initialState: RAMCharacterState = {
  charactersSpanish: [],
  charactersEnglish: [],
  currentCharacters: [],
  loading: false,
};

export const getAllCharacters = createAsyncThunk(
  "RAMCharacter/all",
  async () => {
    const request = new ApiFetch(RAM_API_URL, "/character");
    const response = await request.getAll();
    return response.results;
  }
);

export const RAMCharacterSlice = createSlice({
  name: "RAMCharacter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCharacters.fulfilled, (state, { payload }) => {
      state.currentCharacters = payload;
    });
  },
});

export const selectCharacters = (state: RootState) => {
  return state.RAMCharacter.currentCharacters;
};

export default RAMCharacterSlice.reducer;
