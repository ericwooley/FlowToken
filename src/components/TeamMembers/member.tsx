import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme'
const Title = styled.h2``
const Wrapper = styled.div`
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  ${Title} {
    text-align: left;
  }
`

const Img = styled.img`
  max-height: 10rem;
  max-width: 10rem;
  height: 10rem;
  width: 10rem;
  margin: 0 1rem 0 0;
  box-shadow: 0 0 2rem -0.1rem ${colors.lightAccent};
  border-radius: 0.5rem;
`
export interface MemberProps {
  imgSrc: string
  imgAlt: string
  title: string
  left?: boolean
}
export default class Member extends React.PureComponent<
  MemberProps & { children: any },
  {}
> {
  static defaultProps = {
    left: true
  }
  render() {
    return (
      <Wrapper>
        <Img
          style={{ float: this.props.left ? 'left' : 'right' }}
          src={this.props.imgSrc}
          alt={this.props.imgAlt}
        />
        <Title>{this.props.title}</Title>
        <hr />
        {this.props.children}
      </Wrapper>
    )
  }
}
