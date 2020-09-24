import React from 'react';
import tetoLogoImg from  '../../assets/images/logo.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

import ExternalLink from '../ExternalLink';

import * as S from './styles';

const DATA = {
  title: 'TETO ajuda milhões de latinos-americanos. Faça uma doação e faça parte de um futuro melhor!',
  subTitle: 'Converse no nosso chat e entenda melhor a causa e faça uma doação.',
  socalDescription: 'Compartilhe esta causa',
  socialMedia: [
    {
      name: 'Facebook',
      Icon: FaFacebook,
      link: 'https://facebook.com/',
    },
    {
      name: 'Twitter',
      Icon: FaTwitter,
      link: 'https://twitter.com/share?url=https%3A%2F%2Fdoe.teto.org.br%2Fdoe%2Fsingle_step&amp;via=tetobra&amp;text=Doe para a TETO Brasil!&amp;lang=pt-BR',
    },
    {
      name: 'Instagram',
      Icon: FaInstagram,
      link: 'https://www.instagram.com/teto.br',
    },
  ]
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
          {DATA.socialMedia.map(({ name, link, Icon }) => (
            <li key={name}>
              <ExternalLink href={link}>
                <Icon size={32}/>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </S.Container>
  );
}

export default Description;
