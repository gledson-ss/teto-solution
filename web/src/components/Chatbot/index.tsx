import React, { useEffect, useRef, useState } from "react";
import ReactSimpleChatBot from "react-simple-chatbot";

import { TweenMax, Power3 } from "gsap";

import steps from "./steps";

import * as S from "./styles";

const Chatbot: React.FC = () => {
  const [hasVoice] = useState<boolean>(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      TweenMax.from(containerRef.current, 1.4, {
        x: 80,
        opacity: 0,
        delay: 1,
        ease: Power3.easeOut,
      });
    }
  }, [containerRef]);

  return (
    <S.Container ref={containerRef}>
      <ReactSimpleChatBot
        headerTitle="Organização TETO"
        speechSynthesis={{ enable: hasVoice, lang: "pt" }}
        style={S.content}
        steps={steps}
      />
    </S.Container>
  );
};

export default Chatbot;
