import React, { FC } from "react";

import { ButtonStyle } from "./styles";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Button: FC<ButtonProps> = ({ children, handleClick }) => {
  return <ButtonStyle onClick={handleClick}>{children}</ButtonStyle>;
};

export default Button;
