const app = getApp();
Page({

 
  data: {
    stories: [{
      id:"",
      image1:""
    }], 

  },

onLoad: function () {
  const Stories = new wx.BaaS.TableObject("ac_stories");

  Stories.find().then((res) => {
    console.log("detail page result", res);
    this.setData({
      stories:res.data.objects,
    });
  }, (error) => {
    console.log("error", error);
  }
  );

  },



toStories: function () {
  wx.switchTab({
    url: 'pages/profile/profile',
  })
  },

})