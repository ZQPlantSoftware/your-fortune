const _api = require('./_api')

const baseSUrl = 'http://route.showapi.com/'
const sAppId = '43943'
const sAppKey =  'cb8ab2087d7a42e7b2e1a9470659bc42'

const baseSRequest = (url, param = {}) => {
    params.data['showapi_appid'] = sAppId
    params.data['showapi_sign'] = sAppKey

    _api.baseRequest(`${baseSUrl}${url}`, params)
}

const dailyYello = (params) => {
  return baseRequest('856-1', params)
}

module.export = {
  dailyYello
}
