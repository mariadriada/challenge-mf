import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import { ButtonProps } from "../../../types";
import Button from "../Button";

describe("<Button />", () => {
  test("should render properly", async () => {
    const props: ButtonProps = { handleClick: jest.fn() };
    render(<Button {...props}>test button</Button>);

    expect(screen.getByText("test button")).toBeDefined();
  });
});
