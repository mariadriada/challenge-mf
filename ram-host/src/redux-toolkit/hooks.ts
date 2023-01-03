import type { TypedUseSelectorHook } from "react-redux";
import { createDispatchHook, createSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { localContext } from "./context";

export const useLocalDispatch: () => AppDispatch =
  createDispatchHook(localContext);
export const useLocalSelector: TypedUseSelectorHook<RootState> =
  createSelectorHook(localContext);
