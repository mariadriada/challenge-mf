import styled from "@emotion/styled";

export const HeaderContainerStyle = styled("div")(
  (props) => `
  align-items: center;
  align-items: center;
  background-color: #df78ef;
  display: flex;
  justify-content: center;
  min-height: ${props.primary ? "100vh" : "10%"};
  width: 100%;

  & .header__languaje {
    max-height: 3rem;

    & .header__link {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }
  }
  
  & .header__buttons {
    display: flex;
    justify-content: center;
    padding-top: ${props.primary ? 0 : "3rem"};
`
);
