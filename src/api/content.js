
import axios from '@/utils/request'
// import qs from 'qs'
// 
const getList = (options) => {
  return axios.post('/public/list', {
    ...options
  })
}

// 温馨提醒
const getTips = () => {
  return axios.get('/public/tips')
}
// 本周热议
const getTop = () => {
  return axios.get('/public/top')
}
// 友情链接
const getLinks = () => {
  return axios.get('/public/links')
}



export { getList, getTips, getTop, getLinks }
