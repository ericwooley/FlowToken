import * as React from 'react'
import Nav from './components/nav/'
import { LinksEnum } from './components/nav/nav'
import styled from 'styled-components'
import { colors } from './theme'
import scrollToElement from 'scroll-to-element'
import WhitePaper from './components/whitepaper/'
import { connect } from 'react-redux'
import { actionCreators, selectors } from './reducers/ui'
import { IState } from './reducers/'
import Intro from './components/intro/intro'
import Particles from './components/intro/particles'
import './App.css'
import TimeLine from './components/timeline/timeline'
import MemberList from './components/TeamMembers/member_list'
import Ico from './components/ico/ico'
const MainStyles = styled.main`
  *:focus {
    outline: none;
    border-bottom: 0.3rem solid ${colors.lightAccent};
  }
`

const Section: any = styled.div`
  min-height: calc(40vh - ${(props: any) => props.navHeight || 0}px);
  padding: 3rem 2rem;
  box-sizing: border-box;
  p {
    text-align: left;
    font-size: 1.6rem;
    margin: 1rem 0;
  }
  h1,
  h2,
  h3,
  h4 {
    margin: 1rem 0;
    text-align: right;
  }
  button {
    margin: 1rem 0;
  }
  box-shadow: 0 0 0.4rem 0.3rem rgba(0, 0, 0, 0.3);
`

const SectionLight = styled(Section)`
  background: radial-gradient(
    ellipse at center,
    ${colors.light} 0%,
    ${colors.light} 40%,
    ${colors.lightDarkenedMore} 130%
  );
  color: ${colors.mainDarkened};
`

const SectionDark = styled(Section)`
  background: radial-gradient(
    ellipse at center,
    ${colors.main} 0%,
    ${colors.main} 70%,
    ${colors.mainDarkened} 130%
  );
  color: ${colors.light};
  /* box-shadow: 0 0 0.4rem 0.3rem rgba(0, 0, 0, 0.3); */
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
    this.props.toggleMenu(false)
    if (section) {
      scrollToElement(section, {
        offset: 5 - this.state.navHeight,
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
      <MainStyles innerRef={this.captureRef(LinksEnum.UP)} className="App">
        {/* {window.innerWidth > mobileWidth && (
          <div style={{ height: this.state.navHeight }} />
        )} */}
        <Particles />
        <Intro />
        <SectionLight
          key={LinksEnum.WHITE_PAPER}
          navHeight={this.state.navHeight}
        >
          <WhitePaper innerRef={this.captureRef(LinksEnum.WHITE_PAPER)}>
            <h1>White Paper</h1>
          </WhitePaper>
        </SectionLight>
        <SectionDark
          navHeight={this.state.navHeight}
          key={LinksEnum.TEAM}
          innerRef={this.captureRef(LinksEnum.TEAM)}
        >
          <h1>Meet the Team</h1>
          <MemberList />
        </SectionDark>
        <SectionLight
          navHeight={this.state.navHeight}
          key={LinksEnum.TIME_LINE}
          innerRef={this.captureRef(LinksEnum.TIME_LINE)}
        >
          <h1>Time Line</h1>
          <TimeLine />
        </SectionLight>
        <SectionDark
          navHeight={this.state.navHeight}
          key={LinksEnum.ICO}
          innerRef={this.captureRef(LinksEnum.ICO)}
        >
          <h1>ICO</h1>
          <Ico />
        </SectionDark>
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
