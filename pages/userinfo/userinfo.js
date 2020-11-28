const app=getApp();

Page({
  data: {
    userInfo:[],
    items:{},
  },

  getUserInfo:function(userInfo){
    const userProfile = new wx.BaaS.TableObject("_userprofile");
    // set up the query
      let query = new wx.BaaS.Query();
      query.compare("id","=",userInfo.id); //need to remove dummy once navigation is established
      userProfile.setQuery(query)
      .find()
      .then(
        (res)=>{
          console.log("query results",res)
          this.setData({
            items: res.data.objects[0],
          })
        }
      )
  },

  onLoad: function () {
    const page = this
  wx.getStorage({
    key: 'userInfo',
    success(res){
      console.log("checkout user info",res.data);
      page.setData({
        userInfo: res.data
      });
    page.getUserInfo(res.data)
    }
  })


  },
  editProfile: function(e){
    wx.navigateTo({
      url: `/pages/editProfile/editProfile?id=${this.data.items.id}`,
    })
  },

})  