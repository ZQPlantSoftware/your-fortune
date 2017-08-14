//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUser: function () {
      let _this = this
      let login

      _this.wxlogin().then(res => {
          login = res
          return _this.getUserInfo()
      }).then(res => {
          _this._user.wx = res.userInfo
          return _this.getOpenId(login.code)
      }).then(res => {
          _this._user.wx.openid = res.data.openid
          return _this.login(login)
      }).catch(e => {
          console.error("报错啦！！！", e)
      })
  },
  login: function() {
    api.login({data: this._user.wx}).then(res => {
      this._user.zq = res.data.data.user
      _this.globalData.token = res.data.data.token
    })
  }
  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
            console.log('userinfo:', res)
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    showApi: 'http://route.showapi.com',
    sAppId: '43943',
    sAppKey: 'cb8ab2087d7a42e7b2e1a9470659bc42'
  }
})
