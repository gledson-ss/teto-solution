import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background: ${({theme}) => theme.headerBgColor};
  display: flex;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
`
export const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`

export const Title = styled.p`
  color: white;
  font-weight: bold;
`
export const WarningText = styled.p`
  color: white;
  padding-right: 10px;
`

export const WarningContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
