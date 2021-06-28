
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
  return axios.get('/public/topWeek')
}
// 友情链接
const getLinks = () => {
  return axios.get('/public/links')
}

// 上传图片
const uploadImg = (pic) => {
  console.log('🚀 ~ file: content.js ~ line 26 ~ uploadImg ~ pic', pic)
  return axios.post('/content/upload', pic)
}


export { getList, getTips, getTop, getLinks, uploadImg }
