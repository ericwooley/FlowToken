import * as React from 'react'
import styled from 'styled-components'
import { colors, mobileWidth } from '../../theme'
export enum LinksEnum {
  WHITE_PAPER = 'White Paper',
  TEAM = 'Team',
  PLAN = 'Plan',
  ICO = 'ICO'
}
const ToggleButton = styled.button`
  height: 40px;
  width: 40px;
  position: fixed;
  top: 0.7rem;
  right: 0.7rem;
  border-radius: 100%;
  box-shadow: 0 0rem 0.3rem 0 rgba(0, 0, 0, 0.75);
  cursor: pointer;
`
const Shader = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 200ms;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.3);
  @media (min-width: ${mobileWidth + 1}px) {
    display: none;
  }
  &.active {
    opacity: 1;
    bottom: 0;
    right: 0;
  }
`
const Nav = styled.nav.attrs({
  tabIndex: '0'
} as any)`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transform: translateY(-100%);
  background-color: ${colors.dark};
  transition: transform 200ms;
  @media (max-width: ${mobileWidth}px) {
    transform: translateX(100%);
    flex-direction: column;
    top: 0;
    bottom: 0;
    bottom: 0;
    width: auto;
    left: inherit;
  }
  &.active {
    transform: translateY(0);
    height: auto;
    cursor: default;
    outline: none;
    border-radius: 0;
    box-shadow: 0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.75);
    display: flex;
    align-content: flex-end;
    box-sizing: border-box;
    @media (max-width: ${mobileWidth}px) {
      transform: translateX(0);

      a {
        justify-content: center;
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
      }
    }
  }
`
const Link = styled.a.attrs({
  href: '#'
})`
  color: ${colors.light};
  text-decoration: none;
  display: inline-block;
  text-align: center;
  flex: 1;
  font-size: 1.5rem;
  padding: 1rem 0;
  background: transparent;
  transition: background 250ms;
  &:hover {
    background: ${colors.darkAccent};
  }
`
interface Props {
  active: boolean
  onToggle: () => any
  topOfPage: boolean
  onNavigation: (to: LinksEnum) => any
  onNavHeight?: (height: number) => any
}
interface State {
  height: number
}
export default class Navigation extends React.PureComponent<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state)
    this.state = {
      height: 50
    }
  }
  triggerOnToggle = (e: any) => {
    // if (e.target.tagName === 'NAV') {
    this.props.onToggle()
    // }
  }
  triggerNavigation = (to: LinksEnum) => () => {
    this.props.onNavigation(to)
  }
  captureFillerHeight = (el?: HTMLDivElement) => {
    if (el && window.innerWidth > mobileWidth) {
      const height = el.getBoundingClientRect().height
      this.setState({
        height
      })
      if (this.props.onNavHeight) {
        this.props.onNavHeight(height)
      }
    }
  }
  render() {
    return (
      <span style={{ zIndex: 1000 }}>
        <ToggleButton
          onFocus={this.triggerOnToggle}
          onClick={this.triggerOnToggle}
        />
        <Shader
          onClick={this.triggerOnToggle}
          className={[
            this.props.active && 'active',
            this.props.topOfPage && !this.props.active && 'hidden-desktop'
          ]
            .filter(i => !!i)
            .join(' ')}
        />
        <Nav
          innerRef={this.captureFillerHeight}
          className={this.props.active || this.props.topOfPage ? 'active' : ''}
        >
          {Object.keys(LinksEnum).map((key: LinksEnum) => (
            <Link onClick={this.triggerNavigation(LinksEnum[key])} key={key}>
              {LinksEnum[key]}
            </Link>
          ))}
        </Nav>
      </span>
    )
  }
}
