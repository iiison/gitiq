import { getRepos }     from '$api/user'
import { formatRepos }  from '$utils/formatters'
import { updateRepos, updateReposError } from '$redux/repos'

/**
 * Fetch User action creator
 * @return {Object} Action for Fetching user
 */
function fetchingUser() {
  return {
    type : 'FETCHING_USER'
  }
}

/**
 * If API responds with Repos.
 * @param  {String} userName  User github handle
 * @return {Object}           Action
 */
function fetchingUserSuccess(userName) {
  return {
    type : 'FETCHING_USER_SUCCESS',
    userName
  }
}

/**
 * If API doesn't respond with proper result
 * @return {Object} Action
 */
function fetchingUserError() {
  return {
    type : 'FETCHING_USER_ERROR'
  }
}
// Async action creators

/**
 * Fetch User Repos(if any) from Github API
 * @param  {String} username  username passed by the user
 * @return {Promise}          Promise
 */
export function fetchUserDetails(username) {
  return (dispatch) => {
    dispatch(fetchingUser())

    return getRepos(username)
      .then((result) => {
        const formattedRepos = formatRepos(result.data)

        dispatch(fetchingUserSuccess(formattedRepos.user))
        dispatch(updateRepos(formattedRepos))
      })
      .catch(() => {
        dispatch(fetchingUserError())
        dispatch(updateReposError())
      })
  }
}
const initialUserState = {
  error      : '',
  isFetching : false
}

/**
 * Reducer: Main `user` state Reducer, will have userid, user repos
 * and other user details
 * @param  {Object} state  `user` state
 * @param  {Object} action actions to change particular part of user state
 * @return {Object}        New `user` state
 */
export default function user(state = initialUserState, action) {
  switch (action.type) {
  case 'FETCHING_USER': {
    return {
      ...state,
      isFetching : true
    }
  }
  case 'FETCHING_USER_ERROR': {
    return {
      ...state,
      isFetching : false,
      error      : 'Something is not right, please try again.'
    }
  }
  case 'FETCHING_USER_SUCCESS': {
    return {
      ...state,
      isFetching : false,
      userName   : action.userName,
      error      : ''
    }
  }

  default:
    return state
  }
}
