import { combineReducers } from 'redux'
import ui, { UIState, selectors as uiSelectors } from './ui'
export interface IState {
    ui: UIState
  }

export const selectors = {
  ui: uiSelectors
}
export default combineReducers({
   ui
})