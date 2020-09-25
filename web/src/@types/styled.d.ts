import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    main: string;
    background: string;
    text: string;
    dark: string;
  }
}
