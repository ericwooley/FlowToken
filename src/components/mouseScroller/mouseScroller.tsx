import * as React from 'react'
import styled, { keyframes } from 'styled-components'
const ScrollAnimation = keyframes`
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0;}
`
const Wrapper = styled.div`
  .mousey {
    width: 0.3rem;
    padding: 1rem 1.5rem;
    height: 3.5rem;
    border: 0.2rem solid #fff;
    border-radius: 25rem;
    opacity: 0.75;
    box-sizing: content-box;
  }
  .scroller {
    width: 0.3rem;
    height: 1rem;
    border-radius: 25%;
    background-color: #fff;
    animation-name: ${ScrollAnimation};
    animation-duration: 2.2s;
    animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
    animation-iteration-count: infinite;
  }
`
export default class MouseScroll extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Wrapper>
        <div className="mousey">
          <div className="scroller" />
        </div>
      </Wrapper>
    )
  }
}
