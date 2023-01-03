import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import { ListProps } from "../../../types";

import List from "../List";

describe("<List />", () => {
  test("should render number of items properly", async () => {
    const props: ListProps = {
      list: [
        {
          name: "mock-name",
          image: "http://test.com",
          status: "mock-status",
          gender: "mock-gender",
          id: 1,
          species: "mock-species",
        },
        {
          name: "mock-name",
          image: "http://test.com",
          status: "mock-status",
          gender: "mock-gender",
          id: 1,
          species: "mock-species",
        },
      ],
    };
    render(<List {...props} />);

    waitFor(() => {
      expect(screen.findByText("mock-name")).toHaveLength(2);
      expect(screen.findByText("mock-status")).toHaveLength(2);
      expect(screen.findByText("mock-gender")).toHaveLength(2);
      expect(screen.findByText("mock-species")).toHaveLength(2);
    });
  });
});
