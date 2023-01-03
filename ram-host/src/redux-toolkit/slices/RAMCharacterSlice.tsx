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

/*TODO: translate data to change language
export const translateData = createAsyncThunk(
  "RAMCharacter/translate",
  async (data) => {
    const newData = [];

    data.forEach(async (item) => {
      const items = Object.keys(item);
      console.log(items);

      items.forEach(async (key) => {
        console.log(key, item[key]);
        if (key !== "image") {
          const res = await fetch("https://libretranslate.de/translate", {
            method: "POST",
            body: JSON.stringify({
              q: "Hello",
              source: "en",
              target: "es",
              format: "text",
              api_key: "",
            }),
            headers: { "Content-Type": "application/json" },
          });
          console.log(await res.json());
        }
      });
    });
  }
);
*/

export const getAllCharacters = createAsyncThunk(
  "RAMCharacter/all",
  async (_, { dispatch }) => {
    const request = new ApiFetch(RAM_API_URL, "/character");
    const response = await request.getAll();
    const { results } = response || [];
    const newResult = results.map(
      ({ id, name, status, species, gender, image }: ItemProps) => {
        return { id, name, status, species, gender, image };
      }
    );
    //dispatch(translateData(newResult));
    return newResult;
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
      state.charactersEnglish = payload;
    });
  },
});

export const selectCharacters = (state: RootState) => {
  return state.RAMCharacter.currentCharacters;
};

export default RAMCharacterSlice.reducer;
