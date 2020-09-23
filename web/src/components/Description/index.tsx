import React from 'react';
import tetoLogoImg from  '../../assets/images/logo.png';

import ExternalLink from '../ExternalLink';

import * as S from './styles';

const DATA = {
  title: 'TETO ajuda milhões de latinos-americanos. Faça uma doação e faça parte de um futuro melhor!',
  subTitle: 'Converse no nosso chat e entenda melhor a causa e faça uma doação.',
  socalDescription: 'Compartilhe esta causa',
}

const Description: React.FC = () => {
  return (
    <S.Container>
      <ExternalLink href="https://www.techo.org/brasil/">
        <img src={tetoLogoImg} alt="Techo logo"/>
      </ExternalLink>

      <h1>{DATA.title}</h1>
      <h2>{DATA.subTitle}</h2>

      <div>
        <p>{DATA.socalDescription}</p>
        <ul>
          <li>
            <ExternalLink href="#">F</ExternalLink>
          </li>

          <li>
            <ExternalLink href="#">T</ExternalLink>
          </li>

          <li>
            <ExternalLink href="#">I</ExternalLink>
          </li>
        </ul>
      </div>
    </S.Container>
  );
}

export default Description;
