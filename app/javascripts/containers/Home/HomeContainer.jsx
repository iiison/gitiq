import React, { Component } from 'react'
import Home from '$components/Home/Home'

/**
 * Home Page container, loads at `/` route.
 */
class HomeContainer extends Component {

  /**
   * React Lifecycle Event: Renders Home Page View
   * @return {JSX}  Calls Home Component to Render the page
   */
  render() {
    return (
      <Home />
    )
  }
}

export default HomeContainer
