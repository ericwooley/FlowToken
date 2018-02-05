import * as React from 'react'
import styled from 'styled-components'
import { colors, mobileWidth } from '../../theme'
import Logo from './logo45'
import MouseScroll from '../mouseScroller/mouseScroller'
const Header = styled.h1`
  color: black;
  opacity: 0.5;
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`
const LogoWrapper = styled.div`
  position: absolute;
  transform: scale(4);
  bottom: 1rem;
  transform-origin: bottom;
  svg {
    opacity: 0;
    transition: opacity 10s ease-in-out;
  }

  &.visible {
    svg {
      opacity: 0.5;
    }

    ${Header} {
      transition: color 10s, opacity 10s;
      color: black;
      opacity: 0.3;
    }
  }
  @media (max-width: ${mobileWidth}px) {
    transform: scale(1);
    bottom: 5rem;
  }
  display: flex;
`
const MousePositioner = styled.div`
  right: 1rem;
  position: absolute;
  bottom: 1rem;
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

export default class IntroStatic extends React.PureComponent<
  {},
  { showLogo: boolean }
> {
  constructor(props: any, state: any) {
    super(props, state)
    this.state = {
      showLogo: false
    }
  }
  componentDidMount() {
    this.setState({
      showLogo: true
    })
  }
  render() {
    return (
      <Static>
        <LogoWrapper className={this.state.showLogo ? 'visible' : ''}>
          <Logo />
        </LogoWrapper>
        <Header>Flow Token</Header>
        <MousePositioner>
          <MouseScroll />
        </MousePositioner>
      </Static>
    )
  }
}
