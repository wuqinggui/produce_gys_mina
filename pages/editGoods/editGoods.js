// pages/editGoods/editGoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      text: '青菜',
      isSelect: false
    }, {
        text: '黄瓜',
        isSelect: false
    }, {
        text: '青菜',
        isSelect: false
    }, {
        text: '青菜',
        isSelect: false
    }, {
        text: '青菜',
        isSelect: false
    }, {
        text: '青菜',
        isSelect: false
    }, {
        text: '青菜',
        isSelect: false
    }]
  },
  bindCheckGoodsItem: function(e) {
    var { checkValue, index} = e.currentTarget.dataset;
    var list = this.data.list;
    list[index].isSelect = checkValue;
    this.setData({
      list: list
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})