import React, { FC, useEffect } from "react";

import { List } from "ramhost/List";
import { SafeComponent } from "ramhost/SafeComponent";
import { useHPLocalStore } from "../redux-toolkit/store";

const ListScreen: FC = () => {
  const { currentCharacters: data, getAllCharacters } = useHPLocalStore();

  useEffect(() => {
    getAllCharacters();
  }, []);

  return <SafeComponent>{data && <List list={data} />}</SafeComponent>;
};

export default ListScreen;
