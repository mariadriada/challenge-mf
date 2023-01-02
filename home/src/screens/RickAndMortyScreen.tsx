import React, { FC } from "react";

import { RickAndMortyList } from "ramhost/ListScreen";
import { Header } from "../components/Header";

const RickAndMortyScreen: FC = () => {
  return (
    <div>
      <Header />
      <RickAndMortyList />
    </div>
  );
};

export default RickAndMortyScreen;
