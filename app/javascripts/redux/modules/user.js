/**
 * Fetch User action creator
 * @return {Object} Action for Fetching user
 */
export function fetchingUser() {
  return {
    type : 'FETCHING_USER'
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
