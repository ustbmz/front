import axios from '@/utils/request'
import qs from 'qs'

const userSign = async () => {
  return axios.get('/user/fav')
}
const updateUserInfo = async (data) => {
  return axios.post('/user/basic', {
    ...data,
  })
}

const resetEmail = async (data) => {
  console.log(data);
  return axios.get('/public/reset-email?' + qs.stringify(data))
}

const resetPasswd = async (data) => {
  return axios.post('/public/reset-passwd', {
    ...data
  })
}

const updatePassword = async (data) => axios.post('/user/password', data)
const getPostListByUid = async (data) => axios.post('/content/mypost', data)
const userCollect = async (data) => axios.post('/content/user-collect', data)
const removeCollect = async (data) => axios.post('/content/remove-collect', data)
const getUserCollect = async (data) => axios.post('/content/collect', data)
const getUserInfo = async (data) => axios.post('/public/userinfo', data)
const getPostList = async (data) => axios.post('/public/postlist', data)
const getCommentsList = async (data) => axios.post('/public/commentslist', data)
const getMsg = async (data) => axios.post('/user/getmsg', data)

export {
  userSign,
  updateUserInfo,
  resetEmail,
  resetPasswd,
  updatePassword,
  getPostListByUid,
  userCollect,
  removeCollect,
  getUserCollect,
  getUserInfo,
  getPostList,
  getCommentsList,
  getMsg
}