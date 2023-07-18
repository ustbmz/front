import escapeHtml from "@/utils/escapeHtml"
import store from "@/store/index"
export default {
  'richtext': {
    bind: function (el, binding) {
      el.innerHTML = escapeHtml(binding.value)
    },
    componentUpdated: function (el, binding) {
      el.innerHTML = escapeHtml(binding.value)
    }

  },
  'hasRole': {
    inserted: function (el, binding) {
      let roles = store.state.userInfo.roles
      if (!roles.inclued(binding.value)) {
        el.parentNode.removeChild(el)
      }
    }
  }
  
}