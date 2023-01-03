import React, { FC } from "react";

import { HarryPotterList } from "hphost/ListScreen";
import { Header } from "../components/Header";

const HarryPotterScreen: FC = () => {
  return (
    <div>
      <Header />
      <HarryPotterList />
    </div>
  );
};

export default HarryPotterScreen;
