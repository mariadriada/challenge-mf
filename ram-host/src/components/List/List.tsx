import React, { FC, useEffect } from "react";

//import { useGlobalStore } from "store/store";
import { Item } from "./Item";
import { ListProps } from "../../types";
import { ListStyle } from "./styles";

const List: FC<ListProps> = ({ list }: ListProps) => {
  /* const { activeLanguage } = useGlobalStore();

  useEffect(() => {
    console.log("cambia el lenguaje", activeLanguage);
    // Cambiar lista dinámica a otro idioma
  }, [activeLanguage]);*/

  return (
    <ListStyle>
      {list.map((data, i) => (
        <Item key={i} {...data} />
      ))}
    </ListStyle>
  );
};

export default List;
