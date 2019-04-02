import fetch from '../../utils/fetch'
// 引入 regeneratorRuntime 以便使用 async 和 await
import regeneratorRuntime from '../../utils/runtime'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgList: [], // 轮播图数据
    categoryList: [] // 分类数据
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.getImgList()
    this.getCategroyList()
  },
  async getImgList() {
    let { data } = await fetch('slides')
    this.data.imgList = data
    this.setData(this.data)
  },
  async getCategroyList() {
    let { data } = await fetch('categories')
    this.data.categoryList = data
    this.setData(this.data)
  }
})