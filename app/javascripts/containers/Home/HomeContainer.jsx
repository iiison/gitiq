import React, { Component, PropTypes }    from 'react'
import { bindActionCreators }  from 'redux'
import Home                    from '$components/Home/Home'
import { connect }             from 'react-redux'
import * as userActionCreators from '$redux/user'

/**
 * Home Page container, loads at `/` route.
 */
class HomeContainer extends Component {
  /**
   * Set Initial State to track form fields
   * @param  {Object} props  props that are coming from parent
   */
  constructor(props) {
    super(props)

    this.state = {
      userName : ''
    }
  }

  /**
   * Change state on change of input field, state `userName` will
   * be used to fetch user's repository
   * @param  {Event} event  input box change event reference
   */
  handleUserNameChange = (event) => {
    const userName = event.target.value

    this.setState(() => {
      return {
        userName
      }
    })
  }

  /**
   * Fetches Given username from API and updates the UI
   * @param  {Event} event   submit button click event reference
   */
  handleFetch = (event) => {
    const state = this.state

    event.preventDefault()

    this
      .props
      .fetchUserDetails(state.userName)
      .then(() => this.context.router.push(state.userName))
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
        isFetching={this.props.isFetching}
        error={this.props.error}
      />
    )
  }
}

HomeContainer.contextTypes = {
  router : PropTypes.object.isRequired
}

/**
 * Maps dispatch and action ceators to render method
 * @param  {function} dispatch - store's dispatch method
 * @return {object}            - action creators in object
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActionCreators, dispatch)
}

/**
 * Avails State to render method
 * @param  {Object}  state  - Full State.
 * @return {Object}         - State fregment that is necessary to component.
 */
function mapStateToProps({ user }) {
  return {
    isFetching : user.isFetching,
    error      : user.error,
    userName   : user.userName
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
