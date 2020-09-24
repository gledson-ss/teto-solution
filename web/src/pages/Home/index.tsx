import React from "react";

import Description from "../../components/Description";
import Chatbot from "../../components/Chatbot";
import PaypalButton from "../../components/PaypalButton";

import { Container } from "./styles";

const donation = {
  donationType: "Unique",
  donor: {
    name: "Felipe",
    email: "felipeffbs3x@gmail.com",
    number: "string",
    birthday: "string"
  },
  payment: {
    cpf: "10026736403",
    value: 200
  }
};

const Home: React.FC = () => {
  return (
    <Container>
      <Description />
      <Chatbot />
      <PaypalButton donation={donation} />
    </Container>
  );
};

export default Home;
