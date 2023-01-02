import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { HomeScreen, RickAndMortyScreen } from "./screens";

export const router = createBrowserRouter([
  { path: "/", element: <HomeScreen /> },
  { path: "/rick-and-morty", element: <RickAndMortyScreen /> },
]);
