import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;

    &::selection {
      background-color: ${({ theme }) => theme.main};
      color: ${({ theme }) => theme.text};
    }
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  a,
  button {
    color: ${({ theme }) => theme.main};
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  li {
    list-style-type: none;
  }
`;
