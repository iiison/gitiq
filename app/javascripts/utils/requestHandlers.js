import axios from 'axios'

const defaultHeaders = {
  'Content-Type' : 'application/json'
}

/**
 * Get Request wrapper
 * @param  {Object} reqObj request data, should have
 *                          - url {String}  URL to hit
 * @return {Promise}      Promise of get request
 */
export function get(reqObj) {
  if (reqObj !== Object(reqObj)) {
    return false
  }

  if (!reqObj.url) {
    return false
  }

  reqObj.payload = reqObj.payload || {}
  reqObj.headers = reqObj.headers || {}

  return axios({
    method  : 'get',
    url     : reqObj.url,
    params  : reqObj.payload,
    headers : {
      ...defaultHeaders,
      ...reqObj.headers
    }
  })
}

/**
 * Post Request wrapper
 * @param  {Object} reqObj  request data, should have
 *                          - url {String}  URL to hit
 * @return {Promise}       Post Promise
 */
export function post(reqObj) {
  if (reqObj !== Object(reqObj)) {
    return false
  }

  if (!reqObj.url) {
    return false
  }

  reqObj.payload = reqObj.payload || {}
  reqObj.headers = reqObj.headers || {}

  return axios({
    method  : 'post',
    url     : reqObj.url,
    data    : reqObj.payload,
    headers : {
      ...defaultHeaders,
      ...reqObj.headers
    }
  })
}
