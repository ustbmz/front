
import axios from '@/utils/request'
import qs from 'qs'
// 
const getList = (options) => {
  axios.get('/public/list?' + qs.stringify(options))
}

// 温馨提醒
const getTips = () => {
  axios.get('/public/tips')
}
// 本周热议
const getTop = () => {
  axios.get('/public/top')
}
// 友情链接
const getLinks = () => {
  axios.get('/public/links')
}



export { getList, getTips, getTop, getLinks }
