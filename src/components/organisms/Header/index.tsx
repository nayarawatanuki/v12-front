'use client'

import { Logo } from '@/components/atoms/Logo'
import { StyledHeader, StyledLeft } from './styles'

export function Header() {
  return (
    <StyledHeader>
      <StyledLeft>
        {/* MenuButton pode vir aqui depois */}
        <Logo src="/assets/favicon.ico" alt="Logo da empresa" />
      </StyledLeft>

      {/* Right reservado pra Language, Currency, User etc depois */}
      <div />
    </StyledHeader>
  )
}
