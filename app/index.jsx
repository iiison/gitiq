import React                   from 'react'
import ReactDOM                from 'react-dom'
import { Provider }            from 'react-redux'
import thunk                   from 'redux-thunk'
import { Router, hashHistory, useRouterHistory } from 'react-router/es6'
import { createHashHistory }   from 'history'
import * as reducers           from '$redux'
import routes                  from '$config/routes'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'


const appHistory = useRouterHistory(createHashHistory)({ queryKey : false })
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
