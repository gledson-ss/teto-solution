import React from "react";

import Chatbot from "../../components/Chatbot";
import Description from "../../components/Description";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Description />
      <Chatbot />
    </Container>
  );
};

export default Home;
