import React, { FC } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import HPCharacterReducer, {
  getAllCharacters,
  selectCharacters,
} from "./slices/HPCharacterSlice";
import { localContext } from "./context";
import { useLocalDispatch, useLocalSelector } from "./hooks";

export const store = configureStore({
  reducer: {
    HPCharacter: HPCharacterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useHPLocalStore = () => {
  const currentCharacters = useLocalSelector(selectCharacters);
  const dispatch = useLocalDispatch();
  return {
    currentCharacters,
    getAllCharacters: () => dispatch(getAllCharacters()),
  };
};

export const HPStoreProvider: FC = ({ children }) => {
  return (
    <Provider store={store} context={localContext}>
      {children}
    </Provider>
  );
};
