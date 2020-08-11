// 时间处理插件
import Vue from 'vue'
import dayjs from 'dayjs'

Vue.prototype.dateDesc = function (data) {// 转时间戳
  return data ? dayjs(data).format('YYYY-MM-DD') : ''
}

Vue.prototype.dateTimeDesc = function (data) {// 转时间戳
  return data ? dayjs(data).format('YYYY-MM-DD HH:mm') : ''
}


