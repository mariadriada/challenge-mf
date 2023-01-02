import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { withTranslation } from "react-i18next";

import { Button } from "../Button";
import { HeaderProps } from "../../types";
import { ButtonContainerStyle } from "./styles";

const Header: FC<HeaderProps> = ({ primary = false, t, i18n }) => {
  const navigate = useNavigate();

  const showRickAndMorty = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    navigate("/rick-and-morty");
  };

  const changeLanguaje = () => {
    i18n.changeLanguage("es");
  };

  return (
    <ButtonContainerStyle primary={primary}>
      <Button handleClick={changeLanguaje}>Cambiar a espanol</Button>
      <Button handleClick={showRickAndMorty}>
        {t("Show Rick And Morty characters")}
      </Button>
      <Button>{t("Show Harry Potter characters")}</Button>
    </ButtonContainerStyle>
  );
};

export default withTranslation()(Header);
//export default Header;
