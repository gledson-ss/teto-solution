import React from "react";

import Description from "../../components/Description";
import Chatbot from "../../components/Chatbot";
import { Container} from "./styles";


const Home: React.FC = () => {
  return (
    <Container>
      <Description />
      <Chatbot />
    </Container>
  );
};

export default Home;
