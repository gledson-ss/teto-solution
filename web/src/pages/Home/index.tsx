import React, { useState } from "react";

import Chatbot from "../../components/Chatbot";
import Description from "../../components/Description";
import ShowCupomModal from "../../components/ShowCupomModal";

import { Container } from "./styles";

const Home: React.FC = () => {
  const [isOpen, setOpen] = useState(true);

  return (
    <Container>
      <Description />
      <Chatbot />
      <button type="button" onClick={() => setOpen(!isOpen)}>
        Toogle Modal
      </button>
      <ShowCupomModal isOpen={isOpen} onClose={() => setOpen(false)} />
    </Container>
  );
};

export default Home;
