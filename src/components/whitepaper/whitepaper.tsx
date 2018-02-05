/* tslint:disable:max-line-length */
import * as React from 'react'
import styled from 'styled-components'
import Button from '../button/button'
import { LightLink } from '../link/link'
import { colors } from '../../theme'
import { Header } from '../Header/header'
const Wrapper = styled.div`
  text-align: center;
  padding-top: 3rem;
`
const WhitePaperFrame = styled.iframe`
  box-shadow: 0 0 0.2rem 0.2rem ${colors.dark};
  height: 0;
  display: block;
  margin: 1rem auto;
  width: 80vw;
  transition: height 400ms, opacity 200ms 200ms, transform 300ms;
  opacity: 0;
  transform: scale(0.9);
  &.visible {
    transition: height 400ms, opacity 200ms, transform 300ms 100ms;
    transform: scale(1);
    opacity: 1;
    height: 70vh;
  }
`
export default class WhitePaper extends React.PureComponent<{
  showWhitePaper: boolean
  toggleWhitePaper: (show: boolean) => any
  innerRef: (el?: HTMLDivElement & any) => any
}> {
  triggerToggleWhitePaper = (e: any) =>
    this.props.toggleWhitePaper(!this.props.showWhitePaper)
  render() {
    return (
      <Wrapper innerRef={this.props.innerRef}>
        <Header>White Paper</Header>
        <p>Our white paper explains the basics of blah blah</p>
        <Button
          style={{ marginRight: '3rem' }}
          onClick={this.triggerToggleWhitePaper}
        >
          {this.props.showWhitePaper
            ? /* tslint:disable:quotemark */
              "Ok, I've seen enough"
            : /* tslint:enable:quotemark */
              'Show me the White Paper'}
        </Button>
        <LightLink download={true} href="/WhitePaper.draft.1.pdf">
          Download PDF
        </LightLink>
        <WhitePaperFrame
          className={this.props.showWhitePaper ? 'visible' : undefined}
          src="/WhitePaper.draft.1.pdf"
        />
      </Wrapper>
    )
  }
}
