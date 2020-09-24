import React from 'react';

import Description from '../../components/Description';

import { Container, ChatPlaceholder } from './styles';


type Paypal = Window & typeof globalThis & {
  paypal: Object;
}

const Home: React.FC = () => {
  const {} = window;

  return (
    <Container>
      <Description />
      <ChatPlaceholder>
        <span></span>
      </ChatPlaceholder>
    </Container>
  );
}

export default Home;
