import * as React from 'react'
import Member, { MemberProps } from './member'
import ericWooleyImage from './images/eric_wooley.jpg'

const members: (MemberProps & { Text: React.StatelessComponent })[] = [
  {
    title: 'Eric Wooley',
    imgSrc: ericWooleyImage,
    imgAlt: 'Eric Wooley and his wife Malia',
    left: true,
    Text: () => (
      <span>
        <p>Eric is a technologist, web developer, and solidity developer.</p>
        <p>Eric earned his CS degree at Sonoma State University in 2014.</p>
      </span>
    )
  }
]

export default class MemberList extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div>
        {members.map(member => {
          const { Text, ...restProps } = member
          return (
            <Member key={member.title} {...restProps}>
              <Text />
            </Member>
          )
        })}
      </div>
    )
  }
}
