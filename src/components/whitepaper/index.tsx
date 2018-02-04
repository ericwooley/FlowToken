import { connect } from 'react-redux'
import WhitePaper from './whitepaper'
import { IState, selectors } from '../../reducers/'
import { actionCreators } from '../../reducers/ui'
export default connect(
  (state: IState) => ({
    showWhitePaper: selectors.ui.showWhitePaper(state)
  }),
  {
    toggleWhitePaper: actionCreators.showWhitePaper
  })(WhitePaper)