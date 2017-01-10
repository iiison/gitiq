import React, { Component }    from 'react'
import ReactMarkdown           from 'react-markdown'
import { connect }             from 'react-redux'
import { bindActionCreators }  from 'redux'
import * as repoActionCreators from '$redux/repos'

class ReadmeContainer extends Component {
  render() {
    const props = this.props
    const params = props.params

    if (props.repos[params.user] && props.repos[params.user][params.repo].readme) {
      console.log('%c <><><><><><><><><><><><><><><>', 'color: green, font-weight: bold')
      console.log(props.repos[params.user][params.repo].readme)
      console.log('%c <><><><><><><><><><><><><><><>', 'color: green, font-weight: bold')
      return (
        <div><ReactMarkdown source={props.repos[params.user][params.repo].readme} /></div>
      )
    }

    return( <h1>{'Loading...'}</h1>)
  }

  /**
   * React Lifecycle Event: Runs only once, will be triggered when component is rendered.
   * will be used only when user refreshes the page or comes directly to `/:user/:repo`
   */
  componentDidMount() {
    const props = this.props
    const params = props.params

    this.props.FetchRepoReadMe(params.user, params.repo, props.repos[params.user])
      .then((data) => {
      })
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
  return bindActionCreators(repoActionCreators, dispatch)
}

/**
 * Avails State to render method
 * @param  {Object}  state  - Full State.
 * @return {Object}         - State fregment that is necessary to component.
 */
function mapStateToProps({ repos }) {
  return {
    repos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadmeContainer)
