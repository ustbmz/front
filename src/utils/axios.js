// 封装axios 返回重新封装后的报文数据
// 进行异常处理
import axios from 'axios'
import errorHandle from './errorHandle'

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  // 获取配置
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      timeout: 10000,
    }
    return config
  }

  // 设置拦截器
  interceptors(instance) {
    // Add a request interceptor
    // 发送请求拦截
    instance.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        console.log(config)
        return config
      },
      (err) => {
        // Do something with request error

        errorHandle(err)
        return Promise.reject(err)
      }
    )

    // Add a response interceptor
    // 响应拦截
    instance.interceptors.response.use(
      (res) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        if (res.status === 200) {
          return Promise.resolve(res.data)
        } else {
          return Promise.reject(res)
        }
      },
      (err) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        errorHandle(err)
        return Promise.reject(err)
      }
    )
  }

  // 创建实例
  request(options) {
    const instance = axios.create()
    //Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    // return instance.request(newOptions)
    return instance(newOptions)
  }

  get (url, config) {
    const options = Object.assign({
      method: "get",
      url:url
    }, config)
    return this.request(options)
  }

  post (url, data, config) {
    const options = Object.assign(
      {
        method: 'post',
        url: url,
        data:data
      },
      config
    )
    return this.request(options)
  }
  

}

export default HttpRequest
