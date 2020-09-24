import React, { useState } from 'react';
import ReactSimpleChatBot from 'react-simple-chatbot';
import PaypalButton from '../PaypalButton'
import Style from './styles'
import { Donation } from '../PaypalButton/donation'

interface messageProps{
  previousValue: string
}

const Steps = [
  {
    id: '1',
    message: 'hello',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3'
  },
  {
    id: '3',
    message: (value: messageProps) =>{
      return value.previousValue
    },
    end: true
  }
]

const Chatbot: React.FC = () => {
  const [hasVoice] = useState<Boolean>(false);

  return (
    <ReactSimpleChatBot
      headerTitle="Organização TETO"
      speechSynthesis={{ enable: hasVoice, lang: 'pt' }}
      style={Style}
      steps={Steps}
    />
  );
};

export default Chatbot;
