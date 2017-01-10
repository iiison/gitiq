import { get } from '$utils/requestHandlers'
import { constants } from '$store'

/**
 * Fetch repo's readme link
 * @param  {String} repoName  Repo Name
 * @param  {String} userName  github user name
 * @return {Promise}          Promise
 */
function getReadMeLink(repoName, userName) {
  return get({
    url : `${constants.githubAPI}repos/${userName}/${repoName}/readme`
  })
}

/**
 * fetch read me from the api
 * @param  {String}  repoName  repo name
 * @param  {String}  userName  user name
 * @return {Promise}           Promise
 */
export function fetchReadMe(repoName, userName) {
  return getReadMeLink(repoName, userName)
    .then((response) => get({
      url : response.data.download_url
    }))
}