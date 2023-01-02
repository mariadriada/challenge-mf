import React, { FC } from "react";

import { ItemProps } from "../../../types";
import { ItemStyle } from "./styles";

const Item: FC<ItemProps> = ({
  gender,
  id,
  image,
  name,
  species,
  status,
  url,
}) => {
  return (
    <ItemStyle key={id}>
      <img className="item__image" src={image} />
      <div className="item__details">
        <h3>{name}</h3>
        <span>
          <strong>Gender: </strong>
          {gender}
        </span>
        <span>
          <strong>Species:</strong> {species}
        </span>
        <span>
          <strong>Status:</strong> {status}
        </span>
      </div>
    </ItemStyle>
  );
};

export default Item;
