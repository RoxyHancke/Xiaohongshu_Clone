const app = getApp();
Page({

 
  data: {
    stories: [{
      id:"",
      image1:""
    }], 
    userinfos: [{
      id:"",
      display_name:""
    }]
  },

onLoad: function () {
  const Stories = new wx.BaaS.TableObject("ac_stories");
  const UserInfos = new wx.BaaS.TableObject("ac_userInfo");

  Stories.expand(['userID']).find().then((res) => {
    console.log("detail page result", res);
    this.setData({
      stories:res.data.objects,
    });
  

  }, (error) => {
    console.log("error", error);
  }
  );
  

  },



toNavigate: function () {
  wx.switchTab({
    url: 'pages/profile/profile',
  })
  },

toStories: function (e) {
  wx.navigateTo({
    url: `/pages/stories/index?id=${e.currentTarget.id}`,
  });
}

})
