import axios from '@/utils/request'

const userSign = async () => {
  return axios.get('/user/fav')
}
const updateUserInfo = async (data) => {
  return axios.post('/user/basic', {
    ...data,
  })
}

export {
  userSign,
  updateUserInfo
}