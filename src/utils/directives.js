import escapeHtml from "@/utils/escapeHtml"

export default {
  'richtext': {
    bind: function (el, binding, vnode) {
      console.log('🚀 ~ file: directives.js ~ line 4 ~ vnode', vnode)
      el.innerHTML = escapeHtml(binding.value)
    },
    componentUpdated: function (el, binding, vnode) {
      console.log('🚀 ~ file: directives.js ~ line 4 ~ vnode', vnode)
      el.innerHTML = escapeHtml(binding.value)
    }

  }
}