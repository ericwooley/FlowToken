import * as React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
// import { render } from 'react-snapshot'
import { render } from 'react-dom'
import { store } from './store'
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
