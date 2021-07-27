import { lightTheme } from './theme';

type ThemeInterface = typeof lightTheme;

declare module 'styled-components' {
  // tslint:disable-next-line:interface-name
  interface DefaultTheme extends ThemeInterface {}
}
