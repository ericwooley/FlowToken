import * as React from 'react'
import Nav from './components/nav/'
import { LinksEnum } from './components/nav/nav'
import styled from 'styled-components'
import { colors, mobileWidth } from './theme'
import scrollToElement from 'scroll-to-element'
import WhitePaper from './components/whitepaper/'
import { connect } from 'react-redux'
import { actionCreators, selectors } from './reducers/ui'
import { IState } from './reducers/'
import Intro from './components/intro/intro'
const MainStyles = styled.main`
  background-color: ${colors.light};
  height: 5000px;
  *:focus {
    outline: none;
    box-shadow: 0 0 0.1rem 0.2rem ${colors.dark};
  }
`

interface Props {
  whitePaperOpen: boolean
  toggleWhitePaper: (show: boolean) => any
  toggleMenu: (open: boolean) => any
}
class App extends React.Component<Props, { navHeight: number }> {
  linkRefs: { [key: string]: HTMLDivElement } = {}
  constructor(props: any, state: any) {
    super(props, state)
    this.state = {
      navHeight: 0
    }
  }
  scrollTo = (to: LinksEnum) => {
    const section = this.linkRefs[to]
    this.props.toggleWhitePaper(false)
    this.props.toggleMenu(false)
    if (section) {
      // const timeoutTime = this.props.whitePaperOpen ? 400 : 50
      scrollToElement(section, {
        offset: 0 - this.state.navHeight,
        ease: 'inSine',
        duration: 400
      })
    }
  }
  captureRef = (title: LinksEnum) => (el: any) => {
    if (el) {
      this.linkRefs[title] = el
    }
  }
  captureNavHeight = (navHeight: number) =>
    this.setState({
      navHeight
    })
  render() {
    return (
      <MainStyles className="App">
        {window.innerWidth > mobileWidth && (
          <div style={{ height: this.state.navHeight }} />
        )}
        <Intro navHeight={this.state.navHeight} />

        <WhitePaper
          key={LinksEnum.WHITE_PAPER}
          innerRef={this.captureRef(LinksEnum.WHITE_PAPER)}
        >
          <h1>White Paper</h1>
        </WhitePaper>
        <div
          key={LinksEnum.TEAM}
          style={{ minHeight: 1000, border: '5px dashed red' }}
          ref={this.captureRef(LinksEnum.TEAM)}
        >
          <h1>TEAM</h1>
        </div>
        <div
          key={LinksEnum.PLAN}
          style={{ minHeight: 1000, border: '5px dashed blue' }}
          ref={this.captureRef(LinksEnum.PLAN)}
        >
          <h1>Plan</h1>
        </div>
        <div
          key={LinksEnum.ICO}
          style={{ minHeight: 1000, border: '5px dashed green' }}
          ref={this.captureRef(LinksEnum.ICO)}
        >
          <h1>ICO</h1>
        </div>
        <Nav onNavHeight={this.captureNavHeight} onNavigation={this.scrollTo} />
      </MainStyles>
    )
  }
}

export default connect(
  (state: IState) => ({
    whitePaperOpen: selectors.showWhitePaper(state)
  }),
  {
    toggleWhitePaper: actionCreators.showWhitePaper,
    toggleMenu: actionCreators.toggleMenu
  }
)(App)
