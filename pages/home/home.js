// pages/home/home.js
<<<<<<< HEAD
<<<<<<< HEAD
import {
  getMultiData,
  getGoodsData
}from '../../service/home.js'
const TOP_DISTANCE = 1000;
const types = ['pop','new','sell']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    titles:['流行','新款','精选'],
    //数据模型
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    currentType:'pop',
    showBackTop:false,
    isTabFixed:false,
    tabScrollTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求轮播图及数据
    this._getMultidata(),
    //请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')

  },
  //---------------网络请求函数
  _getMultidata(){
        //请求轮播图以及推荐数据
        getMultiData().then(res => {
          //取出轮播图和推荐的数据
          const banners = res.data.data.banner.list;
          const recommends = res.data.data.recommend.list;
          //将我们的banners和recommends放到data中
          this.setData({
            banners:banners,
            recommends:recommends
          })
          })
  },
  _getGoodsData(type){
    //获取页码
    const page = this.data.goods[type].page + 1;
    //发送网络请求
    getGoodsData(type,page).then(res => {
      //2.1取出数据
      const list = res.data.data.list;
      //2.2将数据设置到对应的List中
      const oldList = this.data.goods[type].list
      oldList.push(...list)
      //2.3间数据设置到data中的goods中
      const typekey = `goods.${type}.list`;
      const pagekey = `goods.${type}.page`;
      this.setData({
        [typekey]:oldList,
        [pagekey]:page 
      })
    })
  },


  //----------------时间监听函数-----------
  handleTabClick(event){
    //取出index
    const index = event.detail.index;
   //设置currentType
   const type = types[index]
   this.setData({
     currentType:type
   })

  },
  handleImageIoad(){
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tabScrollTop = rect.top
      // console.log(rect)
    }).exec()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

=======
// 注册页面
Page({
  data:{
    message:'哈哈哈',
    list:[]
  },
  handleGetUserInfo(event){
    console.log(event)
  },
  // 监听页面的的生命周期函数
  //页面加载时
  onLoad(){
    console.log('onload')
    // wx.request({
    //   url: "http://152.136.185.210:8000/api/h8",
    //   success:(res) => {
    //     console.log(res)
    //     const data = res.data.data.list;
    //     this.setData({
    //       list:data
    //     })
    //   }
    // })
>>>>>>> 8852b26149ab07bc4c66ddb5d8bafa89d287e5f3
  },
  //页面显示出来时
  onReady(){
    console.log('onReady')
  },
  //页面初次渲染完成时
  onShow(){
    console.log('onShow')
  },
  //页面隐藏时候
  onHide(){
    console.log('onHide')
  },
  onUnload(){

  },
<<<<<<< HEAD

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log('滚动到底部了')
    //上拉加载更多,直接调用函数
    this._getGoodsData(this.data.currentType)

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onPageScroll(options){
    // 1.取出scrollTop
    const scrollTop = options.scrollTop;
    //修改showBackTop的属性
    //官方：不要在滚动的函数中回调平方的调用this.setData

    // if(scrollTop >= TOP_DISTANCE){
    //   this.setData({
    //     showBackTop:true
    //   })
    // }else{
    //   this.setData({
    //     showBackTop:false
    //   })
    // }

    // this.setData({
    //   showBackTop:scrollTop >= TOP_DISTANCE
    // })
    //提高性能的做法
    const flag1 = scrollTop >= TOP_DISTANCE;
    if(flag1 != this.data.showBackTop){
      this.setData({
        showBackTop:flag1
      })
    }
    //修改isTabFixed属性
    const flag2 = scrollTop >= this.data.tabScrollTop;
    if(flag2 != this.data.isTabFixed){
      this.setData({
        isTabFixed:flag2
      })
    }
=======
  //监听wxml相关的一些事件
  handlleGetUserInfo(event){

  },
  handleViewClick(){
    console.log('haha')
>>>>>>> 8852b26149ab07bc4c66ddb5d8bafa89d287e5f3
=======
// 注册页面
Page({
  data:{
    message:'哈哈哈',
    list:[]
  },
  handleGetUserInfo(event){
    console.log(event)
  },
  // 监听页面的的生命周期函数
  //页面加载时
  onLoad(){
    console.log('onload')
    // wx.request({
    //   url: "http://152.136.185.210:8000/api/h8",
    //   success:(res) => {
    //     console.log(res)
    //     const data = res.data.data.list;
    //     this.setData({
    //       list:data
    //     })
    //   }
    // })
  },
  //页面显示出来时
  onReady(){
    console.log('onReady')
  },
  //页面初次渲染完成时
  onShow(){
    console.log('onShow')
  },
  //页面隐藏时候
  onHide(){
    console.log('onHide')
  },
  onUnload(){

  },
  //监听wxml相关的一些事件
  handlleGetUserInfo(event){

  },
  handleViewClick(){
    console.log('haha')
>>>>>>> 8852b26149ab07bc4c66ddb5d8bafa89d287e5f3
  }
  //其他事件
  })