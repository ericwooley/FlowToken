/* tslint:disable:max-line-length */
import * as React from 'react'
import styled from 'styled-components'
// import Button from '../button/button'
import { DarkLink } from '../link/link'
import { colors } from '../../theme'
import { Header } from '../Header/header'
const Wrapper = styled.div`
  text-align: center;
  padding-top: 3rem;
`
const Quote = styled.div`
  border-left: 0.4rem solid ${colors.lightAccent};
  padding-left: 2rem;
  .attribution {
    text-align: right;
    a {
      text-decoration: none;
      color: ${colors.darkAccent};
    }
  }
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
  innerRef?: (el?: HTMLDivElement & any) => any
}> {
  triggerToggleWhitePaper = (e: any) =>
    this.props.toggleWhitePaper(!this.props.showWhitePaper)
  render() {
    return (
      <Wrapper innerRef={this.props.innerRef}>
        <Header>White Paper</Header>
        <Quote>
          <p>
            In the cryptocurrency space, a whitepaper is a document presented by
            a start-up with the intention of informing and encouraging investors
            to participate in the start-up’s ICO. If you are unsure about what
            an ICO is, then please check out this article here.
          </p>
          <p>
            A whitepaper contains more technical and in-depth discussions on the
            project that the start-up is building. This could include: The
            consensus algorithm the project decides to use, how the nodes that
            operate on project’s platform would function, and the token system.
          </p>
          <p className="attribution">
            -{' '}
            <DarkLink href="https://www.mycryptopedia.com/what-is-a-whitepaper/">
              mycryptopedia.com
            </DarkLink>
          </p>
        </Quote>
        <hr />
        {/* <Button
          style={{ marginRight: '3rem' }}
          onClick={this.triggerToggleWhitePaper}
        >
          {this.props.showWhitePaper
            ? "Ok, I've seen enough"
            : 'Show me the White Paper'}
        </Button> */}
        <DarkLink
          download={true}
          href={
            process.env.PUBLIC_URL +
            '/FlowTokenWhitePaper.2018-03-21.v0.0.2.pdf'
          }
        >
          Download PDF
        </DarkLink>
        <WhitePaperFrame
          className={this.props.showWhitePaper ? 'visible' : undefined}
          src={
            process.env.PUBLIC_URL +
            '/FlowTokenWhitePaper.2018-03-21.v0.0.2.pdf'
          }
        />
      </Wrapper>
    )
  }
}
