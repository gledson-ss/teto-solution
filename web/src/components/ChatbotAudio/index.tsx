import React from 'react';
import {AiFillSound} from 'react-icons/ai'
import { Container } from './styles';
import {useChatbotProps} from '../../hooks/ChatbotProvider'

const ChatbotAudio: React.FC = () => {
  const {hasVoice, setHasVoice} = useChatbotProps();
  return (
    <Container onClick={() => {
      setHasVoice(!hasVoice);
      console.log(!hasVoice)
    }}>
      <AiFillSound size={20}/>
    </Container>
  )
}

export default ChatbotAudio;
