import PopComponent from './Pop.vue'

const Pop = {}

Pop.install = (Vue) => {
  // 注册pop组件
  const PopConstructor = Vue.extend(PopComponent)
  const instance = new PopConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  // 添加实例方法，供全局使用
  Vue.prototype.$pop = (type, msg) => {
    instance.aniType = type,
      instance.msg = msg,
      instance.isShow = true
  }
}

export default Pop