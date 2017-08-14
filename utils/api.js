const _api = require('./_api')

const baseUrl = 'https://app.tefact.com/'

const baseRequest = (url, params) => {
  return _api.baseRequest(`${baseUrl}${url}`, params)
}

const login = (params) => {
  return baseRequest('user/login', params)
}

module.exports = {
  login
}
