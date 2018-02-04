// UI reducer
import { actionFactory, createReducer } from 'typed-redux-reducers'
enum UITypes {
  TOGGLE_MENU = 'UI/TOGGLE_MENU',
  SET_SCROLL_POSITION = 'UI/SET_SCROLL_POSITION',
  SHOW_WHITE_PAPER = 'UI/SHOW_WHITE_PAPER'
}
export interface UIState {
  menuOpen: boolean,
  scrollTop: number,
  scrollLeft: number,
  showWhitePaper: boolean
}
export const actionBundles = {
  toggleMenu: actionFactory<UIState, boolean|void>(
    UITypes.TOGGLE_MENU,
    (state, action) => ({
      ...state,
      menuOpen: action.payload !== undefined ? action.payload : !state.menuOpen
    })
  ),
  setScrollPosition: actionFactory<UIState, {top: number, left: number}>(
    UITypes.SET_SCROLL_POSITION,
    (state, action): UIState => ({
      ...state,
      scrollTop: action.payload.top,
      scrollLeft: action.payload.left
    })
  ),
  showWhitePaper: actionFactory<UIState, boolean>(
    UITypes.SHOW_WHITE_PAPER,
    (state, action) => ({
      ...state,
      showWhitePaper: action.payload
    })
  )
}
export const actionCreators = {
  toggleMenu: actionBundles.toggleMenu.actionCreator,
  setScrollPosition: actionBundles.setScrollPosition.actionCreator,
  showWhitePaper: actionBundles.showWhitePaper.actionCreator
}
const defaultState: UIState = {
  menuOpen: false,
  scrollTop: 0,
  scrollLeft: 0,
  showWhitePaper: false
}

export default createReducer(defaultState, actionBundles)

export const selectors = {
  showWhitePaper: ({ui}: {ui: UIState}) => ui.showWhitePaper
}
