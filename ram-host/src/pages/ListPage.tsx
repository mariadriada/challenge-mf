import React, { FC, useEffect, useState } from "react";

import { List } from "../components/List/index";
import { ItemProps } from "../types";

const ListPage: FC = () => {
  const [data, setData] = useState<Array<ItemProps>>([]);

  const getAllCharacters = async () => {
    const request = await fetch("https://rickandmortyapi.com/api/character");
    const data = await request.json();
    setData(data.results);
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return <List list={data} />;
};

export default ListPage;
