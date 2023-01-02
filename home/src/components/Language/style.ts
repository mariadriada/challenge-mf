import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const LanguajeStyle = styled("div")(
  css(`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: fixed;
  right: 0;
  top:0;

  & .languaje__title {
    font-size: 1.3rem;
    font-weight: 400;
  }

  & .languaje__input {
    height: 1.2rem;
    margin: 0 .3rem;
    width: 1.2rem;
  }
`)
);
