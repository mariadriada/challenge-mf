import React, { FC, Suspense, lazy } from "react";

const RickAndMortyList = lazy(() =>
  import("ramhost/ListScreen").then(({ RickAndMortyList }) => ({
    default: RickAndMortyList,
  }))
);
import { Header } from "../components/Header";

const RickAndMortyScreen: FC = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading</div>}>
        <RickAndMortyList />
      </Suspense>
    </div>
  );
};

export default RickAndMortyScreen;
