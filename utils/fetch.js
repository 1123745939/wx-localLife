// 封装一个通用fetch函数
// 支持promise
function fetch(options) {
  // 判断参数类型
  const type = typeof options
  if (type === 'string') {
    let url = options
    options = {
      url: url
    }
  }
  
  return new Promise((resolve, reject) => {
    wx.request({
      url: `https://locally.uieee.com/${options.url}`,
      method: options.method,
      dataType: options.dataType,
      success: function(res) {
        resolve(res)
      },
      fail: function(err) {
        reject(err)
      }
    })
  })
}
// 导出fetch函数
export default fetch