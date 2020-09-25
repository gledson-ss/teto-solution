import React, { useEffect } from "react";
import {useChatbotProps} from '../../hooks/ChatbotProvider'
import Chatbot from "../../components/Chatbot";
import Description from "../../components/Description";

import { Container } from "./styles";

const Home: React.FC = () => {
  const { hasVoice } = useChatbotProps();

  return (
    <Container>
      <Description />
      <Chatbot />
    </Container>
  );

};

export default Home;
