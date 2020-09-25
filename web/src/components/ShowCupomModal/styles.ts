import Modal from "react-modal";
import styled from "styled-components";

export const Container = styled(Modal)`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.text};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 64px), calc(-50% - 64px));

  min-height: 50vh;
  max-width: 50vw;
  width: 100%;
  margin: 64px;

  padding: 24px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  h1 {
    margin-bottom: 16px;
    padding-bottom: 16px;
    position: relative;

    &::before {
      content: "";
      position: absolute;

      left: 0;
      bottom: 0;

      height: 2px;
      width: 100%;
      background: ${({ theme }) => theme.main};
    }
  }

  p {
    color: ${({ theme }) => theme.dark};
    font-size: 18px;
  }

  p:nth-of-type(2) {
    color: ${({ theme }) => theme.main};
    font-size: 28px;
    margin: 32px 0;
    text-align: center;
  }

  button {
    cursor: pointer;

    margin-top: auto;
    margin-left: auto;

    padding: 8px 16px;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.main};
    font-weight: 700;
  }
`;
