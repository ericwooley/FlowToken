import * as React from 'react'
import Countdown from 'react-count-down'
import styled from 'styled-components'
import { colors } from '../../theme'
const Wrapper = styled.div`
  text-align: center;
  font-size: 1rem;
  .react-count-down {
    margin: 0;
    padding: 2em;
  }

  .react-count-down .prefix {
    font-size: 150%;
    font-weight: 200;
    line-height: 1.5;
    color: ${colors.lightAccent};
    display: block;
  }

  .react-count-down .date {
    font-size: 150%;
    font-weight: 200;
    line-height: 1.5;
    color: ${colors.light};
  }
`
const P = styled.p`
  text-align: center !important;
  color: ${colors.mainDarkened};
`
const OPTIONS = {
  endDate: '09/01/2018 08:00 AM',
  prefix: 'until the ICO begins'
  // cb
}

export default class Ico extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Wrapper>
        <Countdown options={OPTIONS} />
        <P>{OPTIONS.endDate}</P>
      </Wrapper>
    )
  }
}
