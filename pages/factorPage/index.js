// pages/factorPage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  clcikButton(){
    wx.navigateTo({
      url: '/pages/factorPage/factorPage1/factorPage01/index'
    })
   },
   clcikButton1(){
     console.log(1222121212)
    wx.navigateTo({
      url: '/pages/factorPage/factorPage1/factorPage02/index'
    })
   },
   clcikButton2(){
    wx.navigateTo({
      url: '/pages/factorPage/factorPage1/factorPage03/index'
    })
   },
   clcikButton3(){
    wx.navigateTo({
      url: '/pages/factorPage/factorPage1/factorPage04/index'
    })
    },
    clcikButton4(){
      wx.navigateTo({
        url: '/pages/factorPage/factorPage1/factorPage05/index'
      })
      },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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