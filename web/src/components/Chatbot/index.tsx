import React, { useState } from 'react';
import ReactSimpleChatBot from 'react-simple-chatbot';
import PaypalButton from '../PaypalButton'
import Style, {Header} from './styles'
import { Donation } from '../PaypalButton/donation'
import ChatbotHeader from '../ChatbotHeader'

interface Props{
  has: boolean
}

const Steps = [
  {
    id: '1',
    message: 'um',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3'
  },
  {
    id: '3',
    message: 'dois',
    trigger: '4'
  },
  {
    id: '4',
    user: true,
    trigger: '5'
  },
  {
    id: '5',
    message: 'tres'
  }
]

const Chatbot: React.FC<Props> = ({has}) => {
  return (
      has ? <ReactSimpleChatBot
      headerComponent={<ChatbotHeader />}
      headerTitle="Organização TETO"
      speechSynthesis={{ enable: true
      , lang: 'pt' }}
      style={Style}
      steps={Steps}
    /> :
    <ReactSimpleChatBot
      headerComponent={<ChatbotHeader />}
      headerTitle="Organização TETO"
      speechSynthesis={{ enable: false
      , lang: 'pt' }}
      style={Style}
      steps={Steps}
    />
  )
};

export default Chatbot;
