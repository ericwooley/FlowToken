import * as React from 'react'
// import { Timeline, TimelineEvent } from 'react-event-timeline'
import Icon from '../icon/icon'
import styled from 'styled-components'
const Wrapper = styled.div`
  font-size: 1.5rem;
`

export default class TimeLine extends React.PureComponent<
  {},
  {
    fundingDate?: string
    launchDMLS?: string
    ico?: string
    finalizeWhitePaper?: string
    platformMVP?: string
  }
> {
  timeLineComponents: any
  constructor(props: any, state: any) {
    super(props, state)
    this.state = {}
  }
  async componentWillMount() {
    this.timeLineComponents = await import('react-event-timeline')
    this.setupDates()
  }
  async setupDates() {
    const moment = await import('moment')
    const fundingDate = moment('2018-06-01').toDate()
    const launchDMLS = moment(fundingDate)
      .add(1, 'months')
      .toDate()
    const finalizeWhitePaper = moment(launchDMLS)
      .add(1, 'months')
      .toDate()
    const ico = moment(finalizeWhitePaper)
      .add(1, 'months')
      .toDate()
    const platformMVP = moment(ico)
      .add(6, 'months')
      .toDate()
    const dates = {
      fundingDate,
      launchDMLS,
      finalizeWhitePaper,
      ico,
      platformMVP
    }
    const formattedDates = Object.keys(dates)
      .map(key => ({ key, value: moment(dates[key]).format('YYYY MMM DD') }))
      .reduce((obj: any, { key, value }) => {
        obj[key] = value
        return obj
      }, {})
    console.log(formattedDates)
    this.setState(formattedDates)
  }

  render() {
    if (!this.timeLineComponents) {
      return false
    }
    const { Timeline, TimelineEvent } = this.timeLineComponents

    return (
      <Wrapper>
        <Timeline>
          <TimelineEvent
            title="Pre Ico Funding"
            createdAt={this.state.fundingDate}
            icon={<Icon>attach_money</Icon>}
          >
            Flow Token is looking for funding! Our target date for seed funding
            is ${this.state.fundingDate},{' '}
            <a href="mailto:ericwooley@gmail.com">
              Contact Eric, if your interested in pre-funding Flow Token
            </a>
          </TimelineEvent>
          <TimelineEvent
            title="Launch the DMLS"
            createdAt={this.state.launchDMLS}
            icon={<Icon>explore</Icon>}
          >
            The DMLS will allow for searchable listings, and tightly integrate
            with Flow Token.
          </TimelineEvent>
          <TimelineEvent
            title="Finalize White Paper"
            createdAt={this.state.finalizeWhitePaper}
            icon={<Icon>note_add</Icon>}
          >
            The white paper will be finalized, and no major revisions should be
            done. Formatting, and isignificant details may still change.
          </TimelineEvent>
          <TimelineEvent
            title="Beta Testing Begins"
            createdAt={this.state.fundingDate}
            icon={<Icon>warning</Icon>}
          >
            There are a ton of things to test! The whole platform will be
            deployed to the test net for testing.
          </TimelineEvent>
          <TimelineEvent
            title="ICO"
            createdAt={this.state.ico}
            icon={<Icon>swap_vertical_circle</Icon>}
          >
            We will distribute all flow token through our ICO. We will keep X%
            for development costs and founding the first REH.
          </TimelineEvent>
          <TimelineEvent
            title="Platform MVP"
            createdAt={this.state.platformMVP}
            icon={<Icon>all_inclusive</Icon>}
          >
            Platform Launch!
          </TimelineEvent>
        </Timeline>
      </Wrapper>
    )
  }
}
