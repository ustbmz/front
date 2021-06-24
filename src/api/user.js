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
  console.log(data);
  return axios.post('/public/reset-passwd', {
    ...data
  })
}

export {
  userSign,
  updateUserInfo,
  resetEmail,
  resetPasswd
}