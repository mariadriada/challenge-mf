import styled from "@emotion/styled";

export const ButtonContainerStyle = styled("div")(
  (props) => `
  align-items: center;
  background-color: #df78ef;
  display: flex;
  justify-content: center;
  min-height: ${props.primary ? "100vh" : "10%"};
  width: 100%;
`
);
