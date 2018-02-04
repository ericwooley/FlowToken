/* tslint:disable:max-line-length */
import * as React from 'react'
import styled, { StyledFunction } from 'styled-components'
import Button from '../button/button'
import { colors, mobileWidth } from '../../theme'
const Wrapper = styled.div`
  background-color: ${colors.lighter};
  padding: 2rem 0;
`
const LinkWrapper = styled.div`
  text-align: center;
  font-size: 2rem;
  display: flex;
  margin: 1rem 0;
`
interface SectionProps {
  hideOnMobile?: boolean
}
const section: StyledFunction<
  SectionProps & React.HTMLProps<HTMLInputElement>
> =
  styled.div

const Section = section`
  flex: 1;
  text-align: center;
  ${(props: any) =>
    props.hideOnMobile
      ? `
    @media (max-width: ${mobileWidth}px) {
      display: none
    }
  `
      : ''};
`

const DownloadButton = styled.a``
const WhitePaperFrame = styled.iframe`
  position: absolute;
  box-shadow: 0 0 0.2rem 0.2rem ${colors.dark};
  height: 0;
  display: block;
  margin: 0 auto;
  width: 100vw;
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
        <h1>Checkout the White Paper</h1>
        <p>Our white paper explains the basics of blah blah</p>
        <LinkWrapper>
          <Section hideOnMobile={true}>
            <Button onClick={this.triggerToggleWhitePaper}>
              Read the White Paper
            </Button>
          </Section>
          <Section>
            <DownloadButton download={true} href="/WhitePaper.draft.1.pdf">
              Download PDF
            </DownloadButton>
          </Section>
        </LinkWrapper>
        <WhitePaperFrame
          className={this.props.showWhitePaper ? 'visible' : undefined}
          src="/WhitePaper.draft.1.pdf"
        />
      </Wrapper>
    )
  }
}
