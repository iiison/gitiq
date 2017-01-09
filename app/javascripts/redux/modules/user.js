import { getRepos } from '$api/user'

/**
 * Fetch User action creator
 * @return {Object} Action for Fetching user
 */
function fetchingUser() {
  return {
    type : 'FETCHING_USER'
  }
}

// Async action creators

/**
 * Fetch User Repos(if any) from Github API
 * @param  {String} username  username passed by the user
 * @return {Promise}          [description]
 */
export function fetchUserDetails(username) {
  return (dispatch) => {
    dispatch(fetchingUser())

    return getRepos(username)
  }
}
const initialUserState = {
  error      : '',
  isFetching : false
}

/**
 * Main `user` state Reducer, will have userid, user repos
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

  default:
    return state
  }
}
