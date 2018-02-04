import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
// import { actionCreators } from './reducers/ui'
import mySaga from './sagas'

const composeEnhancers = process.env.NODE_ENV !== 'production' 
  && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

// window.addEventListener('scroll', () => {
//   const doc = document.documentElement
//   const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)
//   const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)
//   store.dispatch(actionCreators.setScrollPosition({top, left}))
// })

// then run the saga
sagaMiddleware.run(mySaga)
