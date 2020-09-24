import React, { useEffect } from "react";

import Description from "../../components/Description";
import Chatbot from "../../components/Chatbot";
import { Container} from "./styles";
import { useChatbotProps } from '../../hooks/ChatbotProvider'
const Home: React.FC = () => {
  const { hasVoice } = useChatbotProps();

  if(hasVoice){
    return (
      <Chatbot has={true}/>
    )
  }
  else{
    return (
      <h1>ddddd</h1>
    )
  }

};

export default Home;
