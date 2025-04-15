import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: 58px;
  display: flex;
  padding: 0px 8px;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

  @media (min-width: 350px) {
    padding: 0px 12px;
  }
  @media (min-width: 425px) {
    padding: 0px 16px;
  }
  @media (min-width: 1024px) {
    box-shadow: none;
    height: 52px;
  }
`

export const StyledLeft = styled.div`
  @media (min-width: 1024px) {
    align-items: center;
    display: flex;
    margin-top: -1px;
  }
`