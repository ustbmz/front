import dayjs from 'dayjs'
require('dayjs/locale/zh-cn')
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import escapeHtml from '@/utils/escapeHtml'


const moment = (date)=> {
  return dayjs(date).locale('zh-cn').fromNow()
}

const trasnCatalog = (val) => {
  switch (val) {
    case 'ask':
      return '提问'
    case 'share':
      return '分享'
    case 'discuss':
      return '讨论'
    case 'logs':
      return '动态'
    case 'advise':
      return '建议'
    case 'notice':
      return '公告'
  }
    
}

const escapehtml = (content) => {
  if (content === '') {
    return ''
  } else {
    return escapeHtml(content)
  }
}

export default {
  moment, trasnCatalog, escapehtml
}