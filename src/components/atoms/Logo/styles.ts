import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const StyledPicture = styled.picture`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledLogoImage = styled.img`
  max-width: 120px;
  height: auto;
  margin-right: 0px;

  @media (min-width: 375px) {
    max-width: 145px;
  }

  @media (min-width: 425px) {
    max-width: 155px;
  }

  @media (min-width: 1024px) {
    max-width: 125px;
  }
`