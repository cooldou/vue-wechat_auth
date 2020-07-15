// 配置 weixin-js-sdk
import wx from 'weixin-js-sdk'
import request from '@/utils/request'

async function wxconfig() {
  let url = encodeURIComponent(window.location.href.split('#')[0])
  // let url = encodeURIComponent('wx.xiaoerjiedan.cn')
  console.log(url)
  const res = await request.get(`/api/v1/otherHomePage/getSignature?url=${url}`)
  // console.log(res)
  wx.config({
    debug: true,
    timestamp: res.data.timestamp,
    nonceStr: res.data.noncestr,
    signature: res.data.signature,
    appId: 'wx4bcc988018231d6a',
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone']
  })
}

export default wxconfig
