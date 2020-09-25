import React from "react";
import { ThemeProvider } from "styled-components";

import { DonationProvider } from "./hooks/useDonation";

import Routes from "./routes";

import GlobalStyles from "./styles/global";
import theme from "./styles/themes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <DonationProvider>
        <GlobalStyles />
        <Routes />
      </DonationProvider>
    </ThemeProvider>
  );
};

export default App;
