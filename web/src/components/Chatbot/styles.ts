import styled from 'styled-components'

export default {
  background: '#CCE5FF'
};

export const Header = styled.div`
  width: 100%;
  height: 60px;
  background: ${({theme}) => theme.headerBgColor};
  display: flex;
  justify-content: space-between;
`
