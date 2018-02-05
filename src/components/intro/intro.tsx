import * as React from 'react'
import styled from 'styled-components'
import { colors, mobileWidth } from '../../theme'
import Logo from './logo45'

const LogoWrapper = styled.div`
  position: absolute;
  transform: scale(2);
  bottom: -3.4rem;
  transform-origin: bottom;
  @media (max-width: ${mobileWidth}px) {
    transform: scale(1.5);
  }
`

const Static = styled.div`
  pointer-events: none;
  background: transparent;
  position: relative;
  height: 100vh;
  text-align: center;
  color: ${colors.lightAccent};
  display: flex;
  justify-content: center;
`
const Header = styled.h1`
  color: ${colors.light};
  font-size: 0.8rem;
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
`
export default class IntroStatic extends React.PureComponent<{}> {
  render() {
    return (
      <Static>
        <LogoWrapper>
          <Logo />
          <Header>Flow Token</Header>
        </LogoWrapper>
      </Static>
    )
  }
}
