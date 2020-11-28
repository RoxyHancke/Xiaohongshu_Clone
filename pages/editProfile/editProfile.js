// pages/editProfile/editProfile.js
Page({
  data: {
  },

  onLoad: function (options) {
  
  },

formSubmit: function(e){
  console.log("formsubmit",e);
  //the detail is stored under detail.value
  //get the data table
  const userProfile = new wx.BaaS.TableObject("_userprofile");
  //create a blank record
  const profileEdit = userProfile.create();
  //set the record
  profileEdit.set({
    interest1: e.detail.value.interest1,
    interest2: e.detail.value.interest2,
    interest3: e.detail.value.interest3,
    shortBio: e.detail.value.shortBio
  });
  profileEdit.save().then(
    (res)=>{
      console.log("User profile updated",res);
      (error)=>{
        console.log("new review save", eroor)}
      }
      )
    }
})