import React                   from 'react'
import ReactDOM                from 'react-dom'
import { Provider }            from 'react-redux'
import thunk                   from 'redux-thunk'
import { Router, hashHistory } from 'react-router/es6'
import * as reducers           from '$redux'
import routes                  from '$config/routes'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

const store = createStore(combineReducers(reducers), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (func) => func
))


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes()} />
  </Provider>,
  document.getElementById('root')
)
// ReactDOM.render(<Router history={hashHistory} routes={routes()} />, document.getElementById('root'))
