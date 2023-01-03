import React, { FC } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import RAMCharacterReducer, {
  getAllCharacters,
  selectCharacters,
} from "./slices/RAMCharacterSlice";
import { localContext } from "./context";
import { useLocalDispatch, useLocalSelector } from "./hooks";

export const store = configureStore({
  reducer: {
    RAMCharacter: RAMCharacterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useRAMLocalStore = () => {
  const currentCharacters = useLocalSelector(selectCharacters);
  const dispatch = useLocalDispatch();
  return {
    currentCharacters,
    getAllCharacters: () => dispatch(getAllCharacters()),
  };
};

export const RAMStoreProvider: FC = ({ children }) => {
  return (
    <Provider store={store} context={localContext}>
      {children}
    </Provider>
  );
};
