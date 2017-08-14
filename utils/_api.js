const baseRequest = (url, params) => {
  url = url.startsWith('https://') ? url : `${baseUrl}${url}`

  new Promise((resolve, reject) => {
    wx.request({
      url,
      mehtod: params.method || 'GET',
      data: params.data || {},
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      success(res) {
        resolve(res)
      },
      fail(res) {
        reject(res)
      }
    })
  })
}

module.exports.baseRequest = baseRequest
