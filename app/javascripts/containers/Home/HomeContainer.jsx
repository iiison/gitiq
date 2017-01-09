import React, { Component }    from 'react'
import { bindActionCreators }  from 'redux'
import Home                    from '$components/Home/Home'
import { connect }             from 'react-redux'
import * as userActionCreators from '$redux/user'

/**
 * Home Page container, loads at `/` route.
 */
class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName : ''
    }
  }


  handleUserNameChange = (event) => {
    var userName = event.target.value

    this.setState((previousState) => {
      return {
        userName : userName
      }
    })
  }

  /**
   * Fetches Given username from API and updates the UI
   * @param  {Event} event   submit button click event reference
   */
  handleFetch = (event) => {
    event.preventDefault()

    this.props.fetchUserDetails(this.state.userName)
    this.setState(() => {
      return  {userName : ''}
    })
  }

  /**
   * React Lifecycle Event: Renders Home Page View
   * @return {JSX}  Calls Home Component to Render the page
   */
  render() {
    return (
      <Home
        onFetch={this.handleFetch}
        onUserNameChange={this.handleUserNameChange}
        userName={this.state.userName}
      />
    )
  }
}

/**
 * Maps dispatch and action ceators to render method
 * @param  {function} dispatch - store's dispatch method
 * @return {object}            - action creators in object
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActionCreators, dispatch)
}

export default connect(undefined, mapDispatchToProps)(HomeContainer)
// export default HomeContainer
