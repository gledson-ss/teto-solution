import React, { useState } from "react";
import ReactSimpleChatBot from "react-simple-chatbot";

import PaypalButton from "../PaypalButton";
import { Donation } from "../PaypalButton/donation";

import Style from "./styles";

const Steps = [
  {
    id: "welcome",
    message: "Olá, seja muito bem vindo a Organização TETO",
    trigger: "options",
  },

  {
    id: "options",
    options: [
      {
        value: 1,
        label: "Saber mais sobre a TETO",
        trigger: "description_options",
      },
      {
        value: 2,
        label: "Quero fazer uma doação!",
        trigger: "donation",
      },
      {
        value: 3,
        label: "Quero encerrar a conversa, obrigado",
        trigger: "end",
      },
    ],
  },
  {
    id: "description_options",
    options: [
      {
        value: 1,
        label: "SEJA UM AMIGO DA TETO",
        trigger: "description_options_1",
      },
      {
        value: 2,
        label: "POR QUE DOAR?",
        trigger: "description_options_2",
      },
      {
        value: 3,
        label: "SOBRE A TETO",
        trigger: "description_options_3",
      },
    ],
  },
  {
    id: "description_options_1",
    message:
      "Nós trabalhamos pela superação da pobreza nas favelas mais precárias do país.",
    trigger: "description_link",
  },
  {
    id: "description_options_2",
    message:
      "Doando um pequeno valor a cada mês, você ajuda a atuação da TETO em 6 estados brasileiros.",
    trigger: "description_link",
  },
  {
    id: "description_options_3",
    message:
      "Através da mobilização de moradores e jovens voluntários, construímos moradias de emergência e soluções de infraestrutura.",
    trigger: "description_link",
  },
  {
    id: "description_link",
    options: [
      {
        value: 1,
        label: "Acesse o link para mais informações: [link]",
        trigger: "options",
      },
      {
        value: 2,
        label: "Quero fazer uma doação agora!",
        trigger: "donation",
      },
      {
        value: 3,
        label: "Quero encerrar a conversa, obrigado",
        trigger: "end",
      },
    ],
  },
  {
    id: "donation",
    component: <PaypalButton donation={Donation} />,
  },
  {
    id: "end",
    message: "agradeçemos sua visita, volte sempre!!",
  },
];

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
