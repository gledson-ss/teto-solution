import React from 'react';

import { Container,Title,ButtonContainer, TitleContainer } from './styles';
import ChatbotAudio from '../ChatbotAudio'
const ChatbotHeader: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>
          Organização TETO
        </Title>
      </TitleContainer>
      
      <ButtonContainer>
        <ChatbotAudio />
      </ButtonContainer>
    </Container>
  )
}

export default ChatbotHeader;
