import { render } from "@testing-library/react";
import Box from "./Box";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

describe("<Box />", () => {
  test("should renders children and title correctly", () => {
    const title = "Test Title";
    const align = "right";

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Box title={title} align={align}>
          <div>Children Component</div>
        </Box>
      </ThemeProvider>
    );

    const titleElement = getByText(title);
    const childElement = getByText("Children Component");

    expect(titleElement).toBeInTheDocument();
    expect(childElement).toBeInTheDocument();
  });
});
