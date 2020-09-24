import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import ChatbotProvider from './hooks/ChatbotProvider'

import GlobalStyles from './styles/global';
import theme from './styles/themes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme} >
      <ChatbotProvider>
        <GlobalStyles />
        <Routes />
      </ChatbotProvider>
    </ThemeProvider>
  );
}

export default App;
