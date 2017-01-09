import { get } from '$utils/requestHandlers'
import { constants } from '$store'

/**
 * Method will be used to
 *  - Get user repos
 *  - User Detials
 * @param  {String}   username  Github username
 * @return {Promise}            Login call promise
 */
export function getRepos(username) {
  return get({
    url : `${constants.githubAPI}users/${username}/repos`
  })
}
