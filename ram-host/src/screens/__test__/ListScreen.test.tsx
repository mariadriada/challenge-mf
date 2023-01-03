import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import ListScreen from "../ListScreen";
jest.mock("../../redux-toolkit/store", () => ({
  useRAMLocalStore: () => ({
    currentCharacters: [
      {
        name: "mock-name",
        image: "http://test.com",
        status: "mock-status",
        gender: "mock-gender",
        id: 1,
        species: "mock-species",
        t: jest.fn(),
      },
    ],
    getAllCharacters: jest.fn(),
  }),
}));

describe("<ListScreen />", () => {
  test("should render properly", async () => {
    render(<ListScreen />);

    expect(screen.getByText("mock-name")).toBeInTheDocument();
    expect(screen.getByText("mock-status")).toBeInTheDocument();
    expect(screen.getByText("mock-gender")).toBeInTheDocument();
    expect(screen.getByText("mock-species")).toBeInTheDocument();
  });
});
