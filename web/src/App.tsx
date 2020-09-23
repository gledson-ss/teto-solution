import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import GlobalStyles from './styles/global';
import theme from './styles/themes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
