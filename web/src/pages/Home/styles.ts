import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100%;
  width: 100%;

  section + section {
    margin-left: 32px;
  }

  section {
    flex: 1;
  }
`;

export const ChatPlaceholder = styled.section`
  background: #333;
  height: 50vh;
  width: 40vw;
`;
