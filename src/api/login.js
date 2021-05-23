import axios from '@/utils/request'

// 获取验证码
const getCode = (sid) => {
  return axios.get('/public/getCaptcha', {
    params: {
      "sid": sid
    }
  })
}

// 忘记密码
const forget = async (option) => {
  return axios.post('/login/forgot', {
    ...option,
  })
}

// 登陆接口
const login = async (userinfo) => {
  return axios.post('/login/login', {
    ...userinfo,
  })
}

// 注册接口
const reg = async (reginfo) => {
  return axios.post('/login/reg', {
    ...reginfo,
  })
}


export { getCode, forget, login, reg }
