import fetch from '../../utils/fetch'
// 引入 regeneratorRuntime 以便使用 async 和 await
import regeneratorRuntime from '../../utils/runtime'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    shopList:[]
  },

  onLoad(query) {
    // 获取地址参数
    this.data.id = query.list || 1
  },
  onShow(){
    console.log(this.data.id)
    this.getShopList(this.data.id)
  },
  async getShopList(id) {
    let { data } = await fetch(`categories/${id}/shops?_page=1&_limit=10`)
    this.data.shopList = data
    this.setData(this.data)
    console.log(this.data.shopList)
  }
})