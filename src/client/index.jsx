// @flow

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

import App from './app'
import generalReducer from './reducer/general'
import { APP_CONTAINER_SELECTOR } from '../shared/config'
import { isProd } from '../shared/util'

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(combineReducers({ general: generalReducer }), composeEnhancers(applyMiddleware(thunkMiddleware)))

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)
if (!(rootEl instanceof Element)) {
  throw new Error('invalid type')
}

const wrapApp = (AppComponent, reduxStore) =>
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowserRouter>
  </Provider>

  ReactDOM.render(wrapApp(App, store), rootEl)

  if(module.hot) {
    // flow-disable-next-line
    module.hot.accept('./app', () => {
      // eslint-disable-next-line global-require
      const NextApp = require('./app').default
      ReactDOM.render(wrapApp(NextApp, store), rootEl)
    })
  }
