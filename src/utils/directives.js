import escapeHtml from "@/utils/escapeHtml"

export default {
  'richtext': {
    bind: function (el, binding) {
      el.innerHTML = escapeHtml(binding.value)
    },
    componentUpdated: function (el, binding) {
      el.innerHTML = escapeHtml(binding.value)
    }

  }
}