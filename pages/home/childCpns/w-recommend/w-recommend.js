// pages/home/childCpns/w-recommend/w-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends:{
      type:Array,
      value:[]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImageIoad(){
      if(!this.data.isLoad){
        // console.log('666')
        //向外发送事件
        this.triggerEvent('imageload')
        this.data.isLoad = true
      }
    }

  }
})
