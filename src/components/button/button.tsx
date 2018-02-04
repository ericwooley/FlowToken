import * as React from 'react'
import styled from 'styled-components'
import { MouseEvent } from 'react'
import { colors } from '../../theme'
const ButtonBase = styled.button`
  font-size: 1.4rem;
  box-sizing: border-box;
  background-color: ${colors.darkAccent};
  color: ${colors.lighter};
  border-radius: 0.3rem;
  padding: 0.5rem;
  transition: all 200ms;
  border: 0;
  &:active {
    background-color: ${colors.darkAccentDarkened};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0.1rem 0.2rem ${colors.dark};
  }
`
export default class Button extends React.PureComponent<{
  onClick: (e: MouseEvent<HTMLButtonElement>) => any
}> {
  render() {
    const { children, ...restProps } = this.props
    return <ButtonBase {...restProps}>{this.props.children}</ButtonBase>
  }
}
