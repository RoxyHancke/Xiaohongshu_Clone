const app = getApp()
 

Page({
  data: {
    userInfo: null
  },
  userInfoHandler: function(data) {
    wx.BaaS.auth.loginWithWechat(data).then(user => {
      this.setData({
        userInfo: user
      })
      wx.setStorageSync('userInfo', user)
      console.log("result", data)
      wx.navigateTo({
        url: '../home/index',
      })
      }, err => {
        console.log("error",error)
    })
  },
  
})