// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    phoneNum: '',
    stuNum: '',
    avatar: '',
    nickName: '',
    openID: ''
  },
  login: function () {
    if(this.data.id==''||this.data.phoneNum==''||this.data.stuNum==''){
      wx.showModal({
        title: '你好!',
        content: '你的信息没有填完, 还不能登录噢',
        confirmText: '我知道了',
        showCancel: false
      })
    }else{
      const userInfo={
        id: this.data.id,
        phoneNum: this.data.phoneNum,
        stuNum: this.data.stuNum,
        userAvatar: this.data.avatar,
        nickName: this.data.nickName,
        openID:this.data.openID
      }
      wx.request({
        timeout: 2000,
        url: 'url',
        method: 'POST',
        data:{
          userInfo: userInfo
        },
        success(res){
          if(res.data){
            wx.navigateTo({
              url: '../../pages/welcome/welcome',
            })
          }else{
            wx.showModal({
              title: '⚠',
              content: '你的信息不正确!',
              confirmText: '我再想想',
              showCancel: false
            })
          }
        },
        fail(){
          wx.showToast({
            title: '登录超时',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
  },
  idInput: function (e) {
    this.setData({
      id: e.detail.value
    })
  },
  phoneInput: function (e) {
    this.setData({
      phoneNum: e.detail.value
    })
  },
  stuInput: function (e) {
    this.setData({
      stuNum: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.init()
    wx.cloud.callFunction({
      name: 'getID',
      complete: res => {
        myThis.setData({
          openID:res.result.openid
        })
      }
    })
    wx.request({
      url: 'url',
      method: 'POST',
      data: {
        openID:this.data.openID
      }
    })
    let myThis = this
    wx.getUserInfo({
      success: function(res){
        myThis.setData({
          avatar:res.userInfo.avatarUrl,
          nickName:res.userInfo.nickName
        })      
      }
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