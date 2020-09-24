import React, { useState } from 'react';
import ReactSimpleChatBot from 'react-simple-chatbot';
import PaypalButton from '../PaypalButton'
import Style, {Header} from './styles'
import { Donation } from '../PaypalButton/donation'
import ChatbotHeader from '../ChatbotHeader'
import { useChatbotProps } from '../../hooks/ChatbotProvider'
interface messageProps{
  previousValue: string
}

const Steps = [
  {
    id: '1',
    message: 'ola',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3'
  },
  {
    id: '3',
    message: 'nao porra',
    trigger: '4'
  },
  {
    id: '4',
    message: 'aaaaaaaa'
  }
]

const Chatbot: React.FC = () => {
  const {hasVoice} = useChatbotProps();

  if(hasVoice){
    return (
      <ReactSimpleChatBot
        headerComponent={<ChatbotHeader />}
        headerTitle="Organização TETO"
        speechSynthesis={{ enable: true, lang: 'pt' }}
        style={Style}
        steps={Steps}
      />
    )
  }

  else{
    return (
      <ReactSimpleChatBot
        headerComponent={<ChatbotHeader />}
        headerTitle="Organização TETO"
        speechSynthesis={{ enable: false, lang: 'pt' }}
        style={Style}
        steps={Steps}
      />
    )
  }

};

export default Chatbot;
