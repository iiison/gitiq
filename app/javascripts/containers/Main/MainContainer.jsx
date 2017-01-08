import React, { Component } from 'react'

class MainContainer extends Component {
  render() {
    return (
      <div>
        {'Testing This Shit'}
        {this.props.children}
      </div>
    )
  }
}

export default MainContainer