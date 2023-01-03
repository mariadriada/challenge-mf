import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Button } from "../Button";
import { Languaje } from "../Language";
import { HeaderProps } from "../../types";
import { HeaderContainerStyle } from "./styles";

const Header: FC<HeaderProps> = ({ primary = false, t }) => {
  const navigate = useNavigate();

  const showRickAndMorty = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    navigate("/rick-and-morty");
  };

  const showHarryPotter = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    navigate("/harry-potter");
  };

  return (
    <HeaderContainerStyle primary={primary}>
      <div className="header__languaje">
        <Languaje />
        <Link className="header__link" to="/">
          Home
        </Link>
      </div>

      <div className="header__buttons">
        <Button handleClick={showRickAndMorty}>
          {t("Show Rick And Morty characters")}
        </Button>
        <Button handleClick={showHarryPotter}>
          {t("Show Harry Potter characters")}
        </Button>
      </div>
    </HeaderContainerStyle>
  );
};

export default withTranslation()(Header);
