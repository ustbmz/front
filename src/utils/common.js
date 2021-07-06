/******* 
 * @description: 
 * @param {*}
 * @return {*}
 */
const getElementY = (elem) => {
  return window.pageYOffset + document.querySelector(elem).getBoundingClientRect().top
}

/******* 
 * @description: 滚动到指定的元素
 * @param {String} elem DOM元素
 * @param {Number} durction 滚动动画执行时间
 * @param {Number} offset 偏移量
 * @return {*}
 */
const ScrollToElem = (elem, durction, offset) => {
  // 初始位置
  const startingY = window.pageYOffset
  const elementY = getElementY(elem)
  // 需要滚动的距离
  const diff = elementY - startingY + offset
  if (!diff) return
  // 滑动效果函数
  const easing = t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  // 初始化滚动时间
  let start
  window.requestAnimationFrame(function step (timestamp) {
    if (!start) start = timestamp
    // 计算时间的差值，根据差值计算偏移量
    const time = timestamp - start
    let percent = Math.min(time / durction, 1)
    percent = easing(percent)
    window.scrollTo(0, startingY + diff * percent)
    if (time < durction) {
      window.requestAnimationFrame(step)
    }
  })

}

export {
  getElementY, ScrollToElem
}