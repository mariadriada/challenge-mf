import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ItemStyle = styled("div")(
  css(`
  align-items: center;
  border-radius: .5rem;
  border: 3px solid #df78ef;
  display: flex;
  justify-content: center;
  margin: 1rem 0.5rem;
  max-width: 17rem;
  padding: .5rem;
  width: 30%;

  & .item__image {
    border-radius: .5rem;
    min-width: 100px;
    width: 25%;
  }

  & .item__details {
    color: #455a64;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    height: 100%;
    justify-content: center;
    margin-left: .5rem;
    width: 75%;

    & h3 {
      color: #790e8b;
      margin-bottom: .5em;
      margin: 0;
      padding: 0;
    }

    & span{
      font-size: .8em;
      margin-top: .5em;
    }
  }
`)
);
