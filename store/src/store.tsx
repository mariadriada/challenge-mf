import React, { FC } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import languageReducer, { changeLanguage } from "./slices/languageSlice";
import { useGlobalDispatch, useGlobalSelector } from "./hooks";
import { globalContext } from "./context";

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useGlobalStore = () => {
  const activeLanguage = useGlobalSelector(
    (state) => state.language.activeLanguage
  );
  const dispatch = useGlobalDispatch();
  return {
    activeLanguage,
    changeLanguage: (l: string) => dispatch(changeLanguage(l)),
  };
};

export const GlobalStoreProvider: FC = ({ children }) => {
  return (
    <Provider store={store} context={globalContext}>
      {children}
    </Provider>
  );
};
