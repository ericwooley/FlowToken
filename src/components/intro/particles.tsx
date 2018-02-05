import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'

const Static = styled.div`
  background: linear-gradient(to top, ${colors.main} 20%, ${colors.dark} 110%);
  color: ${colors.lightAccent};
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`
export default class IntroStatic extends React.PureComponent<{}> {
  ParticleComponent: any
  ParticleConfig: any
  async componentWillMount() {
    this.ParticleComponent = (await import('./particles-proxy')).default
    this.ParticleConfig = (await import('./particlesjs-config')).default
    this.forceUpdate()
  }
  render() {
    const ParticleComponent = this.ParticleComponent
    return (
      <Static>
        {ParticleComponent && (
          <ParticleComponent
            params={this.ParticleConfig}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          />
        )}
      </Static>
    )
  }
}
