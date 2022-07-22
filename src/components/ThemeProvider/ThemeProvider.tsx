import React, { ReactChild } from "react";
import { ThemeProvider as OThemeProvider } from "styled-components";

const baseTheme = {
  colors: {
    background: { primary: "#161b22" },
    text: { primary: "#f0f6fc" },
    typography: {
      base: 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI" Helvetica, Arial,sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
  },
};
export type ThemeType = typeof baseTheme;
export interface Props {
  children: ReactChild;
  theme?: ThemeType;
}
export type ThemeProps = { theme: ThemeType };
const ThemeProvider = ({ children, theme = baseTheme }: Props): JSX.Element => (
  <OThemeProvider theme={theme}>{children}</OThemeProvider>
);
export default ThemeProvider;
