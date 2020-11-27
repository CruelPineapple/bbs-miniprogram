// pages/status/status.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardArr: [],
    jackpot: '',
    second: '',
    third: '',
    score: '',
    rank: ''
  },
  toRank: function () {
    wx.navigateTo({
      url: '../../pages/rank/rank',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'url',

    // })
    this.setData({
      cardArr: [1, 5, 4, 5, 6, 50],
      jackpot:'200',
      second: '400',
      third: '600',
      score: '9999',
      rank: '1'
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