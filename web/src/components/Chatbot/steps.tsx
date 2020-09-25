import React from "react";

import ExternalLink from "../ExternalLink";
import PaypalButton from "../PaypalButton";

interface MessageProps {
  previousValue: string | undefined;
}

export default [
  {
    id: "welcome",
    message:
      "Olá, seja bem vindo a Organização TETO. Eu posso te acompanhar para entender melhor quem é a TETO e como podemos fazer o mundo ter um futuro melhor para todos.",
    trigger: "optionsText",
    delay: 1000,
  },
  {
    id: "optionsText",
    message:
      "Se quiser posso te explicar direitinho sobre a TETO ou você pode ir direto para a parte da doação e ter meu amor eterno :)",
    trigger: "options",
    delay: 1000,
  },
  {
    id: "options",
    options: [
      {
        value: 1,
        label: "Quero saber mais sobre a TETO",
        trigger: "aboutTeto",
      },
      {
        value: 2,
        label: "Gostaria de ajudar fazendo uma doação",
        trigger: "donation",
      },
    ],
  },
  {
    id: "aboutTeto",
    message:
      "A america latina é a região mais desigual do mundo. Mais de 104 milhões de pessoas vivem em situação de pobreza.",
    trigger: "aboutTeto2",
    delay: 1000,
  },
  {
    id: "aboutTeto2",
    message:
      "A TETO atua em mais de 19 países da América Latina há mais de 10 anos.",
    trigger: "aboutTeto3",
    delay: 3000,
  },
  {
    id: "aboutTeto3",
    message:
      "Trabalhando com moradores e jovens voluntários, construímos moradias de emergência, sedes comunitárias, pontes, quadras e mais.",
    trigger: "aboutTeto4",
    delay: 6000,
  },
  {
    id: "aboutTeto4",
    message:
      "TETO Brasil foi eleita a melhor ONG de Desenvolvimento Local do Brasil pelo Prêmio Melhores ONGs 2018 - uma iniciativa do Instituto Doar e da Rede Filantropia.",
    trigger: "tetoFriend",
    delay: 6000,
  },
  {
    id: "tetoFriend",
    message:
      "Doando você se torna um amigo da TETO doando e fazer uma enorme diferença na vida de milhões de pessoas. Doe pequeno valores mensais para ajudar a TETO melhorar nossa atuação.",
    trigger: "tetoFriendOptions",
    delay: 6000,
  },
  {
    id: "tetoFriendOptions",
    delay: 6000,
    options: [
      {
        value: 1,
        label: "Quero entender melhor como doar dinheiro pode ajudar a TETO",
        trigger: "whyDonate",
      },
      {
        value: 2,
        label:
          "Quero fazer uma doação única e ajudar fazer um futuro melhor para todos",
        trigger: "donation",
      },
      {
        value: 3,
        label: "Quero fazer uma doação recorrente",
        trigger: "recurrentDonation",
      },
    ],
  },
  {
    id: "recurrentDonation",
    message:
      "Infelizmente ainda não posso gerar um pagamento para que você possa nos ajudar muito mais através de doações recorrentes. Felizmente tem outras alternativas.",
    trigger: "recurrentDonation2",
  },
  {
    id: "recurrentDonation2",
    message: "Acesse esse link e você poderá fazer uma doação recorrente",
    trigger: "recurrentDonation3",
  },
  {
    id: "recurrentDonation3",
    component: (
      <ExternalLink href="https://doe.teto.org.br/doe/single_step">
        Link chavoso
      </ExternalLink>
    ),
    trigger: "end",
  },
  {
    id: "whyDonate",
    message:
      "Nas favelas em que a TETO Brasil atua, o tamanho médio de um barraco é de 27m² onde em boa parte vivem pelo menos quatro pessoas.",
    trigger: "whyDonate2",
    delay: 3000,
  },
  {
    id: "whyDonate2",
    message:
      "E você pode nos ajudar a transformar essa realidade! Com o apoio de nossos doadores, no Brasil já construímos mais de 4 mil moradias de emergência, 50 projetos comunitários e mobilizamos mais de 70 mil voluntários",
    trigger: "whyDonate3",
    delay: 6000,
  },
  {
    id: "whyDonate3",
    message: "Com a sua doação, podemos fazer ainda mais.",
    trigger: "askDonation",
    delay: 1000,
  },
  {
    id: "askDonation",
    options: [
      {
        value: 1,
        label: "Ok, vou doar e tornar o mundo melhor para todos!",
        trigger: "donation",
      },
      { value: 2, label: "Não quero doar.", trigger: "noDonation" },
    ],
  },
  {
    id: "noDonation",
    message:
      "Tudo bem se não quiser doar. Mas sempre pense ajudar o proximo. Nós podemos fazer um futuro melhor para todos com muito pouco",
    trigger: "end",
  },
  {
    id: "donation",
    message:
      "Por enquanto nossas doações só podem ser via Paypal. Estamos trabalhando o mais rápido possível para aceitar mais plataformas de pagamento.",
    trigger: "donation2",
  },
  {
    id: "donation2",
    message: "Por favor informe o valor que deseja doar.",
    trigger: "donationValue",
  },
  {
    // TODO Adicionar ao prop do paypal o valor a ser doado
    id: "donationValue",
    user: true,
    placeholder: "Digite o valor que deseja doar",
    trigger: "paypalComponent",
  },
  {
    id: "paypalComponent",
    component: <PaypalButton value={50} />,
    trigger: "thanks",
  },
  {
    id: "thanks",
    message:
      "Muito obrigado pela sua doação. Você está tornando o mundo um lugar muito melhor :)",
    trigger: "end",
  },
  {
    id: "end",
    message:
      "Agradeço sua visita. Espero que tenha entendido melhor nossa causa e que você possa ajudar mais no futuro. Nós queremos um mundo melhor para todos :)",
    trigger: "initChat",
    // end: true,
  },
  {
    id: "initChat",
    options: [
      {
        value: 1,
        label: "Quero recomeçar a conversa",
        trigger: "welcome",
      },
    ],
  },
];
