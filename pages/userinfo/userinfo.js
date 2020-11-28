const app=getApp();

Page({
  data: {
    items:{},
  },

  onLoad: function (options) {
  console.log('options',options);
  const userProfile = new wx.BaaS.TableObject("_userprofile");
// set up the query
  let query = new wx.BaaS.Query();
  query.compare("id","=",options.id); //need to remove dummy once navigation is established
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
  editProfile: function(e){
    wx.navigateTo({
      url: `/pages/editProfile/editProfile?id=${this.data.items.id}`,
    })
  },

})  