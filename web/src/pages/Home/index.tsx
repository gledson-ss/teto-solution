import React, { useEffect } from "react";

import Description from "../../components/Description";
import Chatbot from "../../components/Chatbot";
import { Container} from "./styles";
import { useChatbotProps } from '../../hooks/ChatbotProvider'
import ChatbotAudio from "../../components/ChatbotAudio";
const Home: React.FC = () => {
  const { hasVoice } = useChatbotProps();

  return (
    <Container>
      <Description />
      <ChatbotAudio />
      {
        hasVoice ? <Chatbot has={true}/>: (<> <h1>seera</h1> <Chatbot has={false}/> </>)
      }
    </Container>
  );

};

export default Home;
