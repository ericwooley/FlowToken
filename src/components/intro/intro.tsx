import * as React from 'react'
import styled, { StyledFunction } from 'styled-components'
import { colors, mobileWidth } from '../../theme'
import Logo from './logo45'
interface WrapperProps {
  navHeight: number
}

const LogoWrapper = styled.div`
  position: absolute;
  transform: scale(3);
  bottom: -2rem;
  transform-origin: bottom;
  @media (max-width: ${mobileWidth}px) {
    transform: scale(2);
  }
`
const wrapper: StyledFunction<
  WrapperProps & React.HTMLProps<HTMLInputElement>
> =
  styled.div

const Static = wrapper`
  background: linear-gradient(
    to bottom, 
    black 0%,
    ${colors.main} 100%
  );
  height: calc(100vh - ${props => props.navHeight}px);
  text-align: center;
  color: ${colors.lightAccent};
  display: flex;
  align-items: center;
  flex-direction: column;
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
export default class IntroStatic extends React.PureComponent<{
  navHeight: number
}> {
  ParticleComponent: any
  ParticleConfig: any
  async componentWillMount() {
    this.ParticleComponent = (await import(/* webpackChunkName: "particles" */ 'react-particles-js')).default
    this.ParticleConfig = (await import(/* webpackChunkName: "particles" */ './particlesjs-config')).default
    this.forceUpdate()
  }
  render() {
    const ParticleComponent = this.ParticleComponent
    console.log(ParticleComponent)
    return (
      <Static navHeight={this.props.navHeight}>
        {ParticleComponent && (
          <div style={{ width: '100%' }}>
            <ParticleComponent
              params={this.ParticleConfig}
              style={{
                flex: 1,
                width: '100%'
              }}
            />
          </div>
        )}

        <LogoWrapper>
          <Logo />
          <Header>Flow Token</Header>
        </LogoWrapper>
      </Static>
    )
  }
}
