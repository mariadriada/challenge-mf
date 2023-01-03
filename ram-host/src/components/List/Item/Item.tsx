import React, { FC, useEffect } from "react";
import { withTranslation } from "react-i18next";

import { ItemProps } from "../../../types";
import { ItemStyle } from "./styles";

const Item: FC<ItemProps> = ({
  gender,
  id,
  image,
  name,
  species,
  status,
  house,
  t,
}) => {
  return (
    <ItemStyle key={id}>
      <img className="item__image" src={image} alt="No image founded!" />
      <div className="item__details">
        <h3>{name}</h3>
        <span>
          <strong>{t("Gender")}: </strong>
          {gender}
        </span>
        <span>
          <strong>{t("Species")}:</strong> {species}
        </span>
        {status && (
          <span>
            <strong>{t("Status")}:</strong> {status}
          </span>
        )}
        {house && (
          <span>
            <strong>{t("house")}:</strong> {house}
          </span>
        )}
      </div>
    </ItemStyle>
  );
};

export default withTranslation()(Item);
