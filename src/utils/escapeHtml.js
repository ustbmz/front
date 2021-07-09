import faces from '@/assets/js/face'

const htmlEncode = (html) => {
  let temp = document.createElement('div')
  temp.textContent !== undefined ? (temp.textContent = html) : (temp.innerText = html)
  //TODO why ?
  // console.log('🚀 ~ file: escapeHtml.js ~ line 6 ~ htmlEncode ~ temp', temp)
  const output = temp.innerHTML
  temp = null
  return output
}
const escapeHtml = (val = '') => {
  if (!val) return ""
  let result = val

  const face = /\sface\[\W{1,}]/g
  const img = /img\[\S+\]/g
  const link = /\sa\(\S+\]/g

  // 表情替换
  if (face.test(result)) {
    let group = result.match(face)
    group.map((item) => {
      let key = item.match(/\[\S+\]/g)[0]
      result = result.replace(item, `<img src='${faces[key]}'>`)
    })
  }

  // 图片替换
  if (img.test(result)) {
    let group = result.match(img)
    group.map((item) => {
      result = result.replace(item, `<img src='${item.substr(4, item.length - 5)}'>`)
    })
  }

  // 链接替换
  if (link.test(result)) {
    const group = result.match(link)
    const title = /\((.+)\)/
    const linkName = /\[(.+)\]/
    group.map((item) => {
      const namegroup = item.match(linkName)
      let name = ''
      if (namegroup.length > 0) {
        name = namegroup[1]
      }
      const linkgroup = item.match(title)
      let link = ''
      if (namegroup.length > 0) {
        link = linkgroup[1]
      }
      result = result.replace(item,`<a herf='${link}'>${name}</a>`)
    })
  }
  // 替换quote
  result = result.replace(/\[quote\]/g,`<div class='layui-elem-quote'>`)
  result = result.replace(/\[\/quote\]/g,`</div>`)

  // 代码块替换
  const code = /(\[\/?pre(.+?)[^\]]*\])|\[[^\]]*\]/g
  if (code.test(result)) {
    const group = result.match(code)
    group.map((item) => {
      result = result.replace(item, htmlEncode(item))
    })
    result = result.replace(/\[pre\]/g, '<pre>')
    result = result.replace(/\[\/pre\]/g, '</pre>')
  }

  // hr 替换
  result = result.replace(/\[hr\]/g, '<hr>')

  // 回撤换行替换为br
  result = result.replace(/\n/g, '<br/>')
  result = result.replace(/\r\n\]/g, '<br/>')
  


  return result
}

export default escapeHtml