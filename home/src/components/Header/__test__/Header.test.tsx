import React from "react";
import { render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import { HeaderProps } from "../../../types";
import Header from "../Header";

jest.mock(
  "store/store",
  () => ({
    useGlobalStore: () => ({
      activeLanguage: "en",
      changeLanguage: jest.fn(),
    }),
  }),
  { virtual: true }
);

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component: React.ElementType) => {
    Component.defaultProps = { ...Component.defaultProps, t: () => "" };
    return Component;
  },
}));

describe("<Header />", () => {
  test.only("should render properly", async () => {
    const props: HeaderProps = { primary: true };
    const { container } = render(<Header {...props}></Header>);

    expect(container.getElementsByClassName("header__languaje")).toBeDefined();
    expect(container.getElementsByClassName("languaje__title")).toBeDefined();
    waitFor(() => expect(screen.findByRole("input")).toHaveLength(2));
  });
});
