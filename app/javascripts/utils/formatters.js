/**
 * Formats Response from API, Formats user repos
 * @param  {Array} repos  API Response
 * @return {Object}       Repos and userName
 */
export function formatRepos(repos) {
  return {
    repos : repos.reduce((prev, curr) => {
      return {
        ...prev,
        [curr.name] : {
          isFetching : true,
          error      : ''
        }
      }
    }, {}),
    user  : (repos.length > 0 && repos[0].owner) ? repos[0].owner.login : ''
  }
}
