import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import SafeComponent from "../SafeComponent";

describe("<SafeComponent />", () => {
  test("should render properly whitout error", async () => {
    render(
      <SafeComponent>
        <h1>This is a test</h1>
      </SafeComponent>
    );

    expect(screen.getByText(/This is a test/g)).toBeInTheDocument;
  });

  test("should show the error message when error occur", async () => {
    const ThrowError = () => {
      throw new Error("Test");
    };

    render(
      <SafeComponent>
        <ThrowError />
      </SafeComponent>
    );

    expect(screen.getByText(/Sommething went wrong/g)).toBeInTheDocument;
  });
});
