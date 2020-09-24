import React, { useEffect, useRef } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import { TweenMax, Power3 } from "gsap";

import ExternalLink from "../ExternalLink";

import tetoLogoImg from "../../assets/images/logo.png";

import * as S from "./styles";

const DATA = {
  title:
    "TETO ajuda milhões de latinos-americanos. Faça uma doação e faça parte de um futuro melhor!",
  subTitle:
    "Converse no nosso chat e entenda melhor a causa e faça uma doação.",
  socalDescription: "Compartilhe esta causa",
  socialMedia: [
    {
      name: "Facebook",
      Icon: FaFacebook,
      link: "https://facebook.com/",
    },
    {
      name: "Twitter",
      Icon: FaTwitter,
      link:
        "https://twitter.com/share?url=https%3A%2F%2Fdoe.teto.org.br%2Fdoe%2Fsingle_step&amp;via=tetobra&amp;text=Doe para a TETO Brasil!&amp;lang=pt-BR",
    },
    {
      name: "Instagram",
      Icon: FaInstagram,
      link: "https://www.instagram.com/teto.br",
    },
  ],
};

const Description: React.FC = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const socialIconsRef = useRef(null);

  useEffect(() => {
    TweenMax.from(titleRef.current, 1, {
      y: 40,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.2,
    });

    TweenMax.from(subTitleRef.current, 1, {
      y: 40,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.5,
    });

    TweenMax.from(socialIconsRef.current, 1, {
      y: 40,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.8,
    });
  }, []);

  return (
    <S.Container>
      <ExternalLink href="https://www.techo.org/brasil/">
        <img src={tetoLogoImg} alt="TETO logo" />
      </ExternalLink>

      <h1 ref={titleRef}>{DATA.title}</h1>
      <h2 ref={subTitleRef}>{DATA.subTitle}</h2>

      <div ref={socialIconsRef}>
        <p>{DATA.socalDescription}</p>
        <ul>
          {DATA.socialMedia.map(({ name, link, Icon }) => (
            <li key={name}>
              <ExternalLink href={link}>
                <Icon size={32} />
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </S.Container>
  );
};

export default Description;
