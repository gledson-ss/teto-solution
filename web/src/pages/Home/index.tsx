import React from "react";

import Description from "../../components/Description";
import Chatbot from "../../components/Chatbot";
import PaypalButton from "../../components/PaypalButton";
import {Donation} from '../../components/PaypalButton/donation'
import { Container } from "./styles";


const Home: React.FC = () => {
  return (
    <Container>
      <Description />
      <Chatbot />
      <PaypalButton donation={Donation} />
    </Container>
  );
};

export default Home;
