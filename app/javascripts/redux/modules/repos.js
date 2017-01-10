import { fetchReadMe }  from '$api/readme'
import { formatRepos }  from '$utils/formatters'

/**
 * Update different User's repos
 * @param  {Object} repoData  List of repos and user name
 * @return {Object}          Action
 */
export function updateRepos(repoData) {
  return {
    type : 'UPDATE_REPOS',
    repoData
  }
}

/**
 * If there is any error while fetcing user's repos
 * @return {Object} Action
 */
export function updateReposError() {
  return {
    type : 'UPDATE_REPOS_ERROR'
  }
}

/**
 * Fetched Repo's read me file successfully
 * @param  {Markdown}  readme    Readme of repo
 * @param  {String}    userName  Github username of repo owner
 * @param  {String}    repoName  Name of Repo of which readme is fetched
 * @return {Object}              Action
 */
export function fetchRepoReadMeSuccess(readme, userName, repoName) {
  return {
    type : 'FETCH_REPO_README_SUCCESS',
    readme,
    userName,
    repoName
  }
}

/**
 * Error in Fetching Repo's read me file
 * @return {Object}  Action
 */
export function fetchRepoReadMeError() {
  return {
    type : 'FETCH_REPO_README_ERROR'
  }
}

const initialState = {
  error      : '',
  isFetching : true
}

// Async Action Creators

/**
 * Thunk: Fetches readme URL and readme file.
 * @param  {String} userName  Github user name
 * @param  {String} repoName  repo name
 * @param  {Object} userRepos user's repo in state currently
 * @return {Promise}          Promise
 */
export function FetchRepoReadMe(userName, repoName, userRepos) {
  return (dispatch) => {
    if (!userRepos) {
      const dummyRepos = formatRepos([{ name : repoName }])

      dummyRepos.user = userName
      dispatch(updateRepos(dummyRepos))
    }

    return fetchReadMe(repoName, userName)
      .then((result) => dispatch(fetchRepoReadMeSuccess(result.data, userName, repoName)))
      .catch((error) => dispatch(fetchRepoReadMeError()))
  }
}


/**
 * Private Reducer: Updates repo's readme in `repo` part of main state
 * @param  {Object} state   particular repo of `repo` state
 * @param  {Object} action  Action
 * @return {[type]}        Updated repo with readme or error.
 */
function readMe(state, action) {
  switch (action.type) {
  case 'FETCH_REPO_README_SUCCESS':
    return {
      ...state,
      readme : action.readme
    }

  case 'FETCH_REPO_README_ERROR':
    return {
      ...state,
      error : 'Something is not right, could not fetch the readme'
    }

  default:
    return state
  }
}

/**
 * Reducer: Updates `repos` part of main state.
 * @param  {Object} state   `repos` part of state
 * @param  {Object} action   Action
 * @return {Object}         Updated state.
 */
export default function repos(state = initialState, action) {
  switch (action.type) {
  case 'UPDATE_REPOS':
    return {
      ...state,
      isFetching             : false,
      error                  : '',
      [action.repoData.user] : action.repoData.repos
    }

  case 'UPDATE_REPOS_ERROR':
    return {
      ...state,
      isFetching : false,
      error      : 'Something is not right, please check the user name'
    }

  case 'FETCH_REPO_README_SUCCESS':
  case 'FETCH_REPO_README_ERROR':
    return {
      ...state,
      [action.userName] : {
        ...(state[action.userName] || {}),
        [action.repoName] : readMe(state[action.userName][action.repoName] || {}, action)
      }
    }

  default:
    return state
  }
}
