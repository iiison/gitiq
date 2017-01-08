import React from 'react'
import { Router, hashHistory } from 'react-router/es6'

import MainContainer from '$containers/Main/MainContainer';

const loadRoute = (callback) => (module) => callback(null, module.default)
const errorLoading = () => {
  // Send Error Logs, pass error from parmas to use it
}

const routes = () => {
  const rootRoute = {
    component : MainContainer,
    childRoutes : [
      {
        path : '/',
        getComponent(location, callback) {
          System.import('javascripts/containers/Home/HomeContainer')
            .then(loadRoute(callback))
            .catch(errorLoading)
        }
      }
    ]
  }

  // return <Router history={hashHistory} routes={rootRoute} />
  return rootRoute
}

export default routes
