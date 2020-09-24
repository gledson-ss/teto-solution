import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    main: string;
    background: string;
    text: string;
    headerBgColor: string,
    headerFontColor: string,
    headerFontSize: string,
    botBubbleColor: string,
    botFontColor: string,
    userBubbleColor: string,
    userFontColor: string,
  }
}
