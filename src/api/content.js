
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

// 发帖
const addPost = (data) => {
  return axios.post('/content/add', {
    ...data
  })
}

// 获取贴子详情
const getPostDetail = (tid) => {
  return axios.get('/public/content/detail?tid=' + tid)
}
// 获取贴子详情
const getComments = (tid) => {
  return axios.get('/public/comments?tid=' + tid)
}

export { getList, getTips, getTop, getLinks, uploadImg, addPost, getPostDetail, getComments }
