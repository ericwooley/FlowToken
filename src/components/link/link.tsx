import styled from 'styled-components'
import { colors } from '../../theme'
export const LightLink = styled.a`
  font-size: 1.6rem;
  color: ${colors.lightAccent};
  text-decoration: none;
  transition: all 200ms;
  &:hover {
    border-bottom: 0.2rem solid ${colors.lightAccent};
  }
  &:visited {
    
  }
`
export const DarkLink = styled(LightLink)`
  color: ${colors.darkAccentDarkened};
  &:hover {
    border-bottom: 0.2rem solid ${colors.darkAccentDarkened};
  }
`
