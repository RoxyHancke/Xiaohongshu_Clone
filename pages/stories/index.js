const app = getApp();
Page({
  data: {
    userInfo:[{id:""}],
    stories:[{id:"", storySubject:"", userId:""}],
    comments:[{comment:""}],
    scrollInto: "",
    inputVal: "",
    inputRating: 1,
    usergetInfo: {},
    options_id:"",
    comment_storyId:"",
    comment:"",
  },
  onLoad: function (options) {
    // get currentUser information
    // const usergetInfo = wx.getStorageSync("userInfo");

    // if (usergetInfo) {
    //   this.setData({
    //     userInfo: usergetInfo,
    //   });
    // }

    const UserInfo = new wx.BaaS.TableObject("ac_userInfo");
    const Stories = new wx.BaaS.TableObject("ac_stories");
    
    const options_id="5fbcf78b3301542d7a0556ad";
    // const comment_storyId="5fbd042933015444fc5031e8"
    // const MovieProducts = new wx.BaaS.TableObject("movie_products");
    // Getting a single movie by id (options.id)
      UserInfo.get(options_id).then((res) => {
            // console.log("halaluya");
            this.setData({ 
              usergetInfo:res.data,
            });
          // console.log(usergetInfo);
      });
    // console.log(res.data);
    // Getting all the reviews with movie_id == options.id
    // set up the query
    let query = new wx.BaaS.Query();
    query.compare("userID", "=", options_id);
    const that = this;
    // // console.log(query);
    Stories.setQuery(query)
          .find()
          .then((res) => {
            // console.log("result from movie reviews query find",res );
          
          this.setData({
            stories: res.data.objects, 
            comment_storyId:res.data.objects[0].id,
          });
          // that.getComment(res.data.objects[0].id);
          // this.setData({
          //   comment:that.getComment(res.data.objects[0].id);
          // // console.log(comment);
        },(error) => {
              console.log("newReview save error, error",error);
        }

      );
  
  },
  // getComment:function(comment_id){
  //   const Comments = new wx.BaaS.TableObject("ac_comment");
  //   console.log(comment_id);
  //   let query_comment= new wx.BaaS.Query();
  //   query_comment.compare("storyID", "=", comment_id,);
  //   console.log(query_comment);
  //   Comments.setQuery(query_comment)
  //                 .find()
  //                 .then((res) => {
  //                   console.log("result from movie reviews query find",res );
  //                 this.setData({
  //                     comments: res.data.objects, 
  //                 }, 
  //                 () => {
  //                   console.log(res);
  //                 })
                  
  //               },(error) => {
  //                     console.log("Error!!!!, error",error);
  //                 },

  //             );
  //     },

/**
 * Lifecycle function--Called when page is initially rendered
 */
onReady: function () {

},

/**
 * Lifecycle function--Called when page show
 */
onShow: function () {

},

/**
 * Lifecycle function--Called when page hide
 */
onHide: function () {

},

/**
 * Lifecycle function--Called when page unload
 */
onUnload: function () {

},

/**
 * Page event handler function--Called when user drop down
 */
onPullDownRefresh: function () {

},

/**
 * Called when page reach bottom
 */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})