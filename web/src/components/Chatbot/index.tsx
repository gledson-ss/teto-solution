import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import * as St from './styles'

const Chatbot: React.FC = () => {
  const [hasVoice, setHasVoice] = useState<Boolean>(false);
  function handle(): void{
    alert('finalizou')
  }
  const theme = {
    background: '#CCE5FF',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#0092DD',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#FFFFFF',
    botFontColor: '#000000',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
      headerTitle="Organização TETO"
      speechSynthesis={{ enable: hasVoice, lang: 'pt' }}
      style={theme}
      steps={[
          {
            id: '1',
            message: 'Olá, seja muito bem vindo a Organização TETO :)',
            trigger: '2',
          },
          {
            id: '2',
            message: 'Através da mobilização de moradores e jovens voluntários, construímos moradias de emergência e soluções de infraestrutura',
            trigger: '3'
          },
          {
            id: '3',
            options:[
              {
                value: 1, label: 'Saber mais sobre a TETO.', trigger: '4'
              },
              {
                value: 2, label: 'Quero fazer uma doação!', trigger: '5'
              },
            ]
          },
          {
            id: '4',
            options: [
              {
                value: 1, label: 'SEJA UM AMIGO DA TETO', trigger: '1',
              },
              {
                value: 2, label: 'POR QUE DOAR?', trigger: '1'
              },
              {
                value: 3, label: 'SOBRE A TETO', trigger: '1'
              }
            ]
          },
          {
            id: '5',
            message: 'fim',
          }
        ]}
      />
    </ThemeProvider>
      
      
    )
}

export default Chatbot;