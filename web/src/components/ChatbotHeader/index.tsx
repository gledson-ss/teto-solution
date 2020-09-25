import React from 'react';
import { Container,Title,ButtonContainer, TitleContainer, WarningContainer, WarningText } from './styles';
import {useChatbotProps} from '../../hooks/ChatbotProvider'
import ChatbotAudio from '../ChatbotAudio'
const ChatbotHeader: React.FC = () => {
  const { hasVoice } = useChatbotProps();
  return (
    <Container>
      <TitleContainer>
        <Title>
          Organização TETO
        </Title>
      </TitleContainer>
      <ButtonContainer>
        <WarningContainer>
          {hasVoice ? <WarningText>
                        Voz ativada
                      </WarningText>
                    :
                    ''
          }
        </WarningContainer>
        <ChatbotAudio />
      </ButtonContainer>
    </Container>
  )
}

export default ChatbotHeader;
