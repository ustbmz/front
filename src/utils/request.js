import HttpRequest from './axios';
import config from '../config/index'
const baseUrl = process.env.NODE_ENV === 'development' ? config.basrUrl.dev : config.basrUrl.pro

const axios = new HttpRequest(baseUrl)

export default axios