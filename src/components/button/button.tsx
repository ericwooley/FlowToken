import styled from 'styled-components'
import { colors } from '../../theme'
export default styled.button`
  font-size: 1.4rem;
  box-sizing: border-box;
  background-color: ${colors.darkAccent};
  color: ${colors.lighter};
  border-radius: 0.3rem;
  padding: 0.5rem;
  transition: all 200ms;
  border: 0;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0.1rem 0.1rem rgba(0, 0, 0, 0.3);
  }
  &:active {
    background-color: ${colors.darkAccentDarkened};
  }
`
