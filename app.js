//app.js

const app = getApp();
App({
  onLaunch: function() {
    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login, wx.getUserInfo, wx.requestPayment)
    let clientID = 'c28c8ae0cae5f3185379'  // 应用名称: TheOutdoorCompany
    wx.BaaS.init(clientID)
  },

  globalData: {
    userInfo: null
  }
})