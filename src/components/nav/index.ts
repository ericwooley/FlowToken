import { connect } from 'react-redux'
import Nav, {LinksEnum as LE } from './nav'
import { IState } from '../../reducers/'
import { actionCreators } from '../../reducers/ui'
import { mobileWidth } from '../../theme'
export const LinksEnum = LE
export default connect(
  (state: IState) => ({
    active: state.ui.menuOpen || window.innerWidth > mobileWidth,
    topOfPage: state.ui.scrollTop > 5
  }),
  {
    onToggle: actionCreators.toggleMenu  
  })(Nav)
