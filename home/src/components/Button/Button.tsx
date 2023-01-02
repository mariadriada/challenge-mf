import React, { FC } from "react";

import { ButtonProps } from "../../types";
import { ButtonStyle } from "./styles";

const Button: FC<ButtonProps> = ({ children, handleClick }) => {
  return <ButtonStyle onClick={handleClick}>{children}</ButtonStyle>;
};

export default Button;
