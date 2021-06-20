import axios from '@/utils/request'
import store from '@/store/index'

const userSign = async () => {
  const headers = {
    Authorization: 'Bearer '+store.state.token
  }
  return axios.get('/user/fav', {
    headers
  })
}

export {
  userSign
}