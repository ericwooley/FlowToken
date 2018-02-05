import * as React from 'react'
import styled from 'styled-components'
const IconBase = styled.i`
  font-size: 2rem;
`
export default class Icon extends React.PureComponent<any> {
  render() {
    const { children, ...restProps } = this.props
    return (
      <IconBase className="material-icons" {...restProps}>
        {children}
      </IconBase>
    )
  }
}
