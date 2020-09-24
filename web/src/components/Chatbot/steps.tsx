import React from "react";

import PaypalButton from "../PaypalButton";
import { Donation } from "../PaypalButton/donation";

export const Steps = [
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
      "A america latina é a região mais desigual do mundo. Mais de 104 milhões de pessoas vivem em situação de pobreza. ",
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
      "Trabalhando em equipe com moradores e jovens voluntários, construímos moradias de emergência e soluções de infraestrutura, como sedes comunitárias, pontes, quadras e biodigestores.",
    trigger: "aboutTeto4",
    delay: 6000,
  },
  {
    id: "aboutTeto4",
    message:
      "Além de passar por auditorias independentes anuais, a TETO Brasil foi eleita a melhor ONG de Desenvolvimento Local do Brasil pelo Prêmio Melhores ONGs 2018 - uma iniciativa do Instituto Doar e da Rede Filantropia.",
    trigger: "tetoFriend",
    delay: 6000,
  },
  {
    id: "tetoFriend",
    message:
      "Seja um amigo da TETO. Doando um pequeno valor a cada mês vocês ajuda a teto a planejar melhor nossa atuação. Você pode ser um amigo da TETO doando um valor único e mesmo assim fazer uma enorme diferença na vida de milhões de pessoas",
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
        // TODO: Adicionar o texto
        value: 3,
        label: "Quero fazer uma doação recorrente",
        // TODO Adicionar a mensagem de doação recorrente
        trigger: "end",
      },
    ],
  },
  {
    // TODO diminuir o texto e perguntar se quer doar
    id: "whyDonate",
    message:
      "Nas favelas em que a TETO Brasil atua, o tamanho médio de um barraco é de 27 m² e, em 31% deles, vivem pelo menos quatro pessoas.* Mas você pode nos ajudar a transformar essa realidade! Com o apoio de nossos doadores, apenas no Brasil já construímos mais de 4 mil moradias de emergência, concluímos 50 projetos comunitários e mobilizamos mais de 70 mil voluntários**. Com a sua doação, podemos fazer ainda mais.",
    trigger: "donation",
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
    // todo adicionar o agradecimento pela doação
    id: "paypalComponent",
    component: <PaypalButton donation={Donation} />,
    // trigger: "thanks"
    trigger: "end",
  },
  {
    id: "end",
    message: "agradeçemos sua visita, volte sempre!!",
  },
];
