import axios from '@/utils/request'

// 获取贴子详情
const getComments = (tid) => {
  return axios.get('/public/comments?tid=' + tid)
}
// 添加评论
const addComments = (data) => {
  return axios.post('/comments/add', {
    ...data
  })
}
// 修改评论
const editComment = (data) => {
  return axios.post('/comments/edit', {
    ...data
  })
}
// 采纳评论
const bestComment = (data) => {
  return axios.post('/comments/best', {
    ...data
  })
}

export { getComments, addComments, editComment, bestComment }