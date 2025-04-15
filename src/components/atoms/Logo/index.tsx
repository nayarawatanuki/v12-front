'use client'

import Link from 'next/link'
import { StyledLogoImage, StyledPicture, StyledWrapper } from './styles'

interface LogoProps {
  src?: '/assets/favicon.ico'
  alt?: string
  href?: string
}

export function Logo({ src = '/assets/favicon.ico', alt = 'Agency Logo', href = '/pt-BR/b2b/accommodations' }: LogoProps) {
  return (
    <Link href={href}>
      <StyledWrapper>
        <StyledPicture>
          <StyledLogoImage src={src} alt={alt} />
        </StyledPicture>
      </StyledWrapper>
    </Link>
  )
}