<<<<<<< HEAD
<<<<<<< HEAD
//app.js
App({
  //生命周函数
  onLaunch: function () {
  },
  addToCart(obj) {
    // 1.判断是否已经添加进来
    const oldInfo = this.globalData.cartList.find((item) => item.iid === obj.iid)
    if (oldInfo) {
      oldInfo.count += 1
    } else {
      obj.count = 1
      obj.checked = true
      this.globalData.cartList.push(obj)
    }

    // 2.购物车回调
    if (this.addCartCallback) {
      this.addCartCallback()
    }
  },
  //全局数据
  globalData: {
    cartList: []
  }
})
=======
=======
>>>>>>> 8852b26149ab07bc4c66ddb5d8bafa89d287e5f3
// 注册小程序实例
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //   判断小程序进入场景
      console.log(options)
      switch(options.scene){
          case 1001:
              break;
          case 1005:
              break;
      }
    //  获取用户信息
      wx.getUserInfo({
        success:function(res){
            console.log(res)
        }
      })
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
<<<<<<< HEAD
>>>>>>> 8852b26149ab07bc4c66ddb5d8bafa89d287e5f3
=======
>>>>>>> 8852b26149ab07bc4c66ddb5d8bafa89d287e5f3
