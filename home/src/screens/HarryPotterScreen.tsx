import React, { FC, Suspense, lazy } from "react";

const HarryPotterList = lazy(() =>
  import("hphost/ListScreen").then(({ HarryPotterList }) => ({
    default: HarryPotterList,
  }))
);
import { Header } from "../components/Header";

const HarryPotterScreen: FC = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading</div>}>
        <HarryPotterList />
      </Suspense>
    </div>
  );
};

export default HarryPotterScreen;
