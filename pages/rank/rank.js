// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'url',
    })
    this.setData({
      rankArr:[      {userName: '用户1', userAvatar:'https://avatars2.githubusercontent.com/u/56106017?s=460&u=0c5814b02226e233c765a7842da4f7e54f377a60&v=4', 
      score:'99999'},
      {userName: 'user2', userAvatar:'https://avatars2.githubusercontent.com/u/56106017?s=460&u=0c5814b02226e233c765a7842da4f7e54f377a60&v=4', 
      score:'1000'},   
      {userName: '3', userAvatar:'https://avatars2.githubusercontent.com/u/56106017?s=460&u=0c5814b02226e233c765a7842da4f7e54f377a60&v=4', 
      score:'1000'},   
      {userName: '4', userAvatar:'https://avatars2.githubusercontent.com/u/56106017?s=460&u=0c5814b02226e233c765a7842da4f7e54f377a60&v=4', 
      score:'1000'},   ]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})