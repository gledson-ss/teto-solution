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
    margin-top: 8px;

    li + li {
      margin-left: 24px;
    }
  }
`;
