import React, { Component } from 'react'

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
      <div>{'Home page container'}</div>
    )
  }
}

export default HomeContainer
