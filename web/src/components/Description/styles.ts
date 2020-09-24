import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  img {
    height: 180px;
    margin-bottom: 32px;
  }

  h2 {
    font-weight: 400;
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
