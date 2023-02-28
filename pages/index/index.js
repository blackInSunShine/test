// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  
  onLoad(options) {
    if(options&&options.id){
      let obj= JSON.parse(options.id);
      wx.requestPayment({
        "timeStamp": obj.timeStamp,
        "nonceStr": obj.nonceStr,
        "package": obj['packageVal'],
        "signType": obj.signType,
        "paySign": obj.paySign,
        "success":function(res){},
        "fail":function(res){},
        "complete":function(res){}
      })
    }
  },
 
})
