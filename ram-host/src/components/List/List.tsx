import React, { FC } from "react";

import { Item } from "./Item";
import { ListProps } from "../../types";
import { ListStyle } from "./styles";

const List: FC<ListProps> = ({ list }: ListProps) => {
  return (
    <ListStyle>
      {list.map((data) => (
        <Item key={data.id} {...data} />
      ))}
    </ListStyle>
  );
};

export default List;
