import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger, { createLogger } from "redux-logger"
import todoApp from './reducers'
import App from './components/App'


const myLogger = (state) => (next) => (action) => {
  console.log(next(action));
}

let store = createStore(
  todoApp,
  {},
  applyMiddleware(myLogger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)