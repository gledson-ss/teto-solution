import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  max-width: 450px;

  img {
    height: 180px;
    margin-bottom: 32px;
    margin-top: -16px;
  }

  h2 {
    font-weight: 400;
    margin-top: 48px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: auto;
  }

  ul {
    display: flex;
    align-items: center;
    margin-top: 12px;

    li + li {
      margin-left: 24px;
    }
  }

  > a,
  li {
    transition: transform 0.2s ease-out;
    transform: translateZ(0);

    &:active {
      transform: scale(0.95) translateZ(0);
    }
  }

  > a {
    &:hover {
      transform: scale(1.06) translateZ(0);
    }
  }

  li {
    &:hover {
      transform: scale(1.2) translateZ(0);
    }
  }
`;
