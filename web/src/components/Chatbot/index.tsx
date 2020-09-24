import React, { useState } from "react";
import ReactSimpleChatBot from "react-simple-chatbot";

import PaypalButton from "../PaypalButton";
import { Donation } from "../PaypalButton/donation";
import { Steps } from "./steps";

import Style from "./styles";

const Chatbot: React.FC = () => {
  const [hasVoice] = useState<boolean>(false);

  return (
    <ReactSimpleChatBot
      headerTitle="Organização TETO"
      speechSynthesis={{ enable: hasVoice, lang: "pt" }}
      style={Style}
      steps={Steps}
    />
  );
};

export default Chatbot;
