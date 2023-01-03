import React, { FC, useEffect } from "react";

import { List } from "../components/List/index";
import { SafeComponent } from "../components/SafeComponent";
import { useRAMLocalStore } from "../redux-toolkit/store";

const ListScreen: FC = () => {
  const { currentCharacters: data, getAllCharacters } = useRAMLocalStore();

  useEffect(() => {
    getAllCharacters();
  }, []);

  return <SafeComponent>{data && <List list={data} />}</SafeComponent>;
};

export default ListScreen;
