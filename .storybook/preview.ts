import type { Preview } from "@storybook/react";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import {normalize} from "styled-normalize";
//@ts-ignore
import {darkTheme, lightTheme} from "@/theme/colors";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: darkTheme.background,
        },
        {
          name: 'light',
          value: lightTheme.background,
        },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
export const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter';
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark:darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles,
  })];
export default preview;
