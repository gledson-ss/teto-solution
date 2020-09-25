import React from "react";
import ReactDOM from "react-dom";
import { Props as ReactModalProps } from "react-modal";

import { Container } from "./styles";

Container.setAppElement("#root");

interface ModalProps extends ReactModalProps {
  onClose: () => void;
  cupom: string;
  discount: string;
}

const ModalPortal: React.FC = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById("modal") as Element,
  );
};

const ShowCupomModal: React.FC<ModalProps> = ({
  cupom,
  discount,
  onClose,
  ...rest
}) => {
  return (
    <ModalPortal>
      <Container {...rest}>
        <h1>Obrigado pela sua doação!!</h1>
        <p>
          {`Estamos tão felizes com isso, que decidimos da-lo um pequeno presente,
          um cupom de desconto de R$ ${discount},00 reais na loja da Dream Team. Espero que goste!
          :)`}
        </p>
        <p>{`Seu cupom: ${cupom}`}</p>

        <button type="button" onClick={onClose}>
          Fechar
        </button>
      </Container>
    </ModalPortal>
  );
};

export default ShowCupomModal;
