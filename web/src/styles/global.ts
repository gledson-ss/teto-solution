import { createGlobalStyle } from "styled-components";

import { opacify } from "polished";

export default createGlobalStyle`
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => opacify(-0.2, theme.main)};
    border-radius: 2.5px;
    transition: 0.2s;

    &:hover {
      background: ${({ theme }) => theme.main};
    }
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
    color: ${({ theme }) => theme.main};

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    min-height: 100vh;
    padding: 32px;
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
