import React, { Component }    from 'react'
import { connect }             from 'react-redux'
import { bindActionCreators }  from 'redux'
import * as userActionCreators from '$redux/user'
import Repos                   from '$components/Repos/Repos'

/**
 * Repos Container, renders list of repos.
 */
class ReposContainer extends Component {
  /**
   * React Lifecycle Event: Renders Repos Page View(/:username/)
   * @return {JSX}  Calls Repos Component to Render the page
   */
  render() {
    const props = this.props

    if (props.isFetching) {
      return (<h1>{'Loading...'}</h1>)
    }

    return (
      <Repos
        repos={props.repos}
        userName={props.userName}
        error={props.error}
      />
    )
  }

  /**
   * React Lifecycle Event: Runs only once, will be triggered when component is rendered.
   * will be used only when user refreshes the page or comes directly to `/:userName`
   */
  componentDidMount() {
    const props = this.props

    if (props.isFetching) {
      props.fetchUserDetails(props.params.user)
    }
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

/**
 * Avails State to render method
 * @param  {Object}  state  - Full State.
 * @return {Object}         - State fregment that is necessary to component.
 */
function mapStateToProps({ user, repos }) {
  return {
    repos      : Object.keys(repos[user.userName] || {}) || [],
    userName   : user.userName || '',
    isFetching : user.isFetching || repos.isFetching,
    error      : repos.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReposContainer)
