import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { ApiFetch } from "ramhost/api";
import type { RootState } from "../store";
import { ItemProps } from ".././../types";
import { HP_API_URL, ITEMS_TO_SHOW } from "../../constants";

interface HPCharacterState {
  charactersSpanish: Array<ItemProps>;
  charactersEnglish: Array<ItemProps>;
  currentCharacters: Array<ItemProps>;
  loading: boolean;
}

const initialState: HPCharacterState = {
  charactersSpanish: [],
  charactersEnglish: [],
  currentCharacters: [],
  loading: false,
};

export const getAllCharacters = createAsyncThunk(
  "HPCharacter/all",
  async () => {
    const request = new ApiFetch(HP_API_URL, "/characters");
    const response = await request.getAll();
    console.log("response", response);

    return response;
  }
);

export const RAMCharacterSlice = createSlice({
  name: "HPCharacter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCharacters.fulfilled, (state, { payload }) => {
      // Set first 20 items
      state.currentCharacters = payload.filter(
        (_, index) => index <= ITEMS_TO_SHOW - 1
      );
    });
  },
});

export const selectCharacters = (state: RootState) => {
  return state.HPCharacter.currentCharacters;
};

export default RAMCharacterSlice.reducer;
