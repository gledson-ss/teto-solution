import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: stretch;
  justify-content: space-around;

  min-height: 100%;
  max-width: 1440px;
  width: 100%;
  margin: auto;

  section:first-of-type {
    margin-right: 32px;
  }

  @media (max-width: 740px) {
    flex-direction: column;
    align-items: center;

    section:first-of-type {
      margin-right: 0;
      margin-bottom: 32px;
    }
  }
`;
