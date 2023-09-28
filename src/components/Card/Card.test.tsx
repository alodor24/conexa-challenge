import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";

const onClickMock = jest.fn();

const mockData = {
  name: "Test Name",
  status: "Alive",
  specie: "Human",
  image: "/assets/images/logo.png",
  onClick: onClickMock,
  isActive: true,
};

describe("<Card />", () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Card {...mockData} />
      </ThemeProvider>
    );
  });

  test("should renders card with correct content", () => {
    expect(screen.getByText(mockData.name)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockData.status} - ${mockData.specie}`)
    ).toBeInTheDocument();
    expect(screen.getByAltText(mockData.name)).toBeInTheDocument();
  });

  test("should calls onClick handler when clicked", () => {
    screen.getByTestId("card-wrapper").click();
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
