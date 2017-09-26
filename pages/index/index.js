//index.js
//获取应用实例
const app = getApp()

Page({
    data:{
      slideUp: false,
        slideUpClass:'',
        goodsList:[
            {
                img: './testImg/timg.jpg',
                info:'杂粮煎饼：白面、小米面、豆面制作',
                newPrice: '14.5',
                oldPrice: '24',
                isSelect: false
            },
            {
                img: './testImg/timg.jpg',
                info:'杂粮煎饼：白面、小米面、豆面制作 +薄脆+肠',
                newPrice: '14.5',
                oldPrice: '24',
                isSelect: false
            }
        ]
    },
    tapCart(){
        if(this.data.slideUp){
            this.setData({
                slideUp: false,
                slideUpClass:''
            });
        }else{
            this.setData({
                slideUp: true,
                slideUpClass:'slide-up'
            });
        }
    }
  /*data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }*/
})
