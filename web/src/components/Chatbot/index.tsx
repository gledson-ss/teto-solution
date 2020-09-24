import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import * as St from './styles'

const Chatbot: React.FC = () => {
  const [hasVoice, setHasVoice] = useState<Boolean>(false);
 
  const theme = {
    background: '#CCE5FF',
  };
  return (
      <ChatBot
      headerTitle="Organização TETO"
      speechSynthesis={{ enable: hasVoice, lang: 'pt' }}
      style={theme}
      steps={[
          {
            id: 'welcome',
            message: 'Olá, seja muito bem vindo a Organização TETO',
            trigger: 'help',
          },
          {
            id: 'help',
            message: 'Ajude-nos com alguma doação :)',
            trigger: 'options'
          },
          {
            id: 'options',
            options:[
              {
                value: 1, label: 'Saber mais sobre a TETO', trigger: 'description_options'
              },
              {
                value: 2, label: 'Quero fazer uma doação!', trigger: 'donation'
              },
              {
                value: 3, label: 'Quero encerrar a conversa, obrigado', trigger: 'end'
              }
            ]
          },
          {
            id: 'description_options',
            options: [
              {
                value: 1, label: 'SEJA UM AMIGO DA TETO', trigger: 'description_options_1',
              },
              {
                value: 2, label: 'POR QUE DOAR?', trigger: 'description_options_2'
              },
              {
                value: 3, label: 'SOBRE A TETO', trigger: 'description_options_3'
              }
            ]
          },
          {
            id: 'description_options_1',
            message: 'Nós trabalhamos pela superação da pobreza nas favelas mais precárias do país.',
            trigger: 'description_link'
          },
          {
            id: 'description_options_2',
            message: 'Doando um pequeno valor a cada mês, você ajuda a atuação da TETO em 6 estados brasileiros.',
            trigger: 'description_link'
          },
          {
            id: 'description_options_3',
            message: 'Através da mobilização de moradores e jovens voluntários, construímos moradias de emergência e soluções de infraestrutura.',
            trigger: 'description_link'
          },
          {
            id: 'description_link',
            options:[
              {value:1, label: 'Acesse o link para mais informações: [link]', trigger:'options'},
              {value:2, label: 'Quero fazer uma doação agora!', trigger: 'donation'},
              {value:3, label: 'Quero encerrar a conversa, obrigado', trigger: 'end'}
            ]
          },
          {
            id: 'donation',
            message: 'blz fera'
          },
          {
            id: 'end',
            message: 'agradeçemos sua visita, volte sempre!!'
          }
        ]}
      />
    )
}

export default Chatbot;