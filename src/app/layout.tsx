"use client";

import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme, { roboto } from "@/styles/theme";
import store from "@/store";
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta
          name="description"
          content="Challenge para optar a cargo como developer frontend en conexa"
        ></meta>
        <meta name="author" content="José Alejandro Méndez"></meta>
        <title>Rick and Morty | Conexa Challenge</title>
      </head>

      <body className={roboto.className}>
        <main>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
              <Provider store={store}>{children}</Provider>
            </ThemeProvider>
          </StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}
