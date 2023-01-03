import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import { ItemProps } from "../../../../types";
import Item from "../Item";

describe("<Item />", () => {
  test("should render properly", async () => {
    const props: ItemProps = {
      name: "mock-name",
      image: "http://test.com",
      status: "mock-status",
      gender: "mock-gender",
      id: 1,
      species: "mock-species",
      t: jest.fn(),
    };

    render(<Item {...props} />);

    expect(screen.getByText("mock-name")).toBeInTheDocument();
    expect(screen.getByText("mock-status")).toBeInTheDocument();
    expect(screen.getByText("mock-gender")).toBeInTheDocument();
    expect(screen.getByText("mock-species")).toBeInTheDocument();
  });

  test("should render properly without image", async () => {
    const props: ItemProps = {
      name: "mock-name",
      status: "mock-status",
      gender: "mock-gender",
      id: 1,
      species: "mock-species",
      t: jest.fn(),
    };

    render(<Item {...props} />);

    expect(screen.getByText("mock-name")).toBeInTheDocument();
    expect(screen.getByText("mock-status")).toBeInTheDocument();
    expect(screen.getByText("mock-gender")).toBeInTheDocument();
    expect(screen.getByText("mock-species")).toBeInTheDocument();
    expect(screen.getByRole("img").getAttribute("alt")).toBe(
      "No image founded!"
    );
  });
});
