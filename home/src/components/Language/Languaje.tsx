import React, { FC } from "react";
import { withTranslation } from "react-i18next";

import { useGlobalStore } from "store/store";
import { LanguajeProps } from "../../types";
import { LanguajeStyle } from "./style";

const Languaje: FC<LanguajeProps> = ({ t, i18n }: LanguajeProps) => {
  const { activeLanguage, changeLanguage } = useGlobalStore();

  const changeLanguaje = (event: React.ChangeEvent<HTMLInputElement>) => {
    i18n.changeLanguage(event.target.value);
    changeLanguage(event.target.value);
  };

  return (
    <LanguajeStyle>
      <span className="languaje__title">{t("Select languaje:")}</span>
      <input
        onChange={changeLanguaje}
        type="radio"
        value="es"
        name="languaje"
        className="languaje__input"
        checked={activeLanguage === "es" ? true : false}
      />
      <label> {t("Spanish")}</label>
      <input
        onChange={changeLanguaje}
        type="radio"
        value="en"
        name="languaje"
        checked={activeLanguage === "en" ? true : false}
        className="languaje__input"
      />
      <label> {t("English")}</label>
    </LanguajeStyle>
  );
};

export default withTranslation()(Languaje);
