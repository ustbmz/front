<template>
  <transition name="fade">
    <div id="preview" class="layui-layer-page layui-layer-prompt edit-content" v-show="isShow">
      <div class="layui-layer-title">预览</div>
      <div class="layui-layer-content" v-html="replaceContent"></div>
      <span class="layui-layer-setwin" @click="cancel()">
        <a class="layui-layer-ico layui-layer-close layui-layer-close1"></a>
      </span>
    </div>
  </transition>
</template>

<script>
import escapeHtml from '@/utils/escapeHtml'
export default {
  name: 'Quote',
  props: ['isShow', 'content'],
  computed: {
    replaceContent() {
      if (this.content === 'undefined' || this.content.trim() === '') {
        return
      }
      return escapeHtml(this.content)
    },
  },
  watch: {
    isShow (newval, oldval) {
      console.log('🚀 ~ file: preview.vue ~ line 29 ~ isShow ~ oldval', oldval)
      if (newval) {
        this.$store.commit('setHide', true)
      } else {
        this.$store.commit('setHide', false)
      }
    }
  },
  methods: {
    submit() {
      if (this.quote === '') {
        document.getElementById('quoteInput').focus()
        this.$pop('shake', '请输入引用内容')
        return
      }
      this.$emit('addEvent', this.quote)
      setTimeout(() => {
        this.quote = ''
        this.$emit('closeEvent')
      }, 0)
    },
    cancel() {
      this.quote = ''
      this.$emit('closeEvent')
    },
  },
}
</script>

<style lang="scss" scoped>
#preview {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;
  top: 0;
  left: 0;
  z-index: 10000;
  overflow-y: auto;
}
</style>
