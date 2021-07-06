<template>
  <div class="edit-warp">
    <div class="layui-from-item layui-form-text">
      <div class="layui-input-block">
        <div class="layui-unselect fly-edit" ref="icons">
          <span @click="choose(0)">
            <i class="iconfont icon-yxj-expression"></i>
          </span>
          <span @click="choose(1)">
            <i class="iconfont icon-tupian"></i>
          </span>
          <span @click="choose(2)">
            <i class="iconfont icon-lianjie"></i>
          </span>
          <span @click="choose(3)" class="quote">
            ”
          </span>
          <span @click="choose(4)">
            <i class="iconfont icon-emwdaima"></i>
          </span>
          <span @click="addHr()">
            hr
          </span>
          <span @click="choose(6)">
            <i class="iconfont icon-yulan"></i>
          </span>
        </div>
        <textarea
          id="edit"
          v-model="content"
          @focus="focusEvent()"
          @blur="blurEvent()"
          ref="textEdit"
          class="layui-textarea fly-editor"
        >
        </textarea>
      </div>
      <div ref="modal">
        <face
          :isShow="this.current === 0"
          :ctrl="this.$refs.face"
          @closeEvent="closeModal()"
          @addEvent="addFace"
        >
        </face>
        <upload-image
          :isShow="this.current === 1"
          :ctrl="this.$refs.image"
          @closeEvent="closeModal()"
          @addEvent="addPic"
        >
        </upload-image>
        <link-add :isShow="this.current === 2" @addEvent="addLink" @closeEvent="closeModal()">
        </link-add>
        <quote :isShow="this.current === 3" @addEvent="addQuote" @closeEvent="closeModal()">
        </quote>
        <code-text
          :isShow="this.current === 4"
          @addEvent="addCode"
          :width="codeWidth"
          :height="codeHeight"
          @closeEvent="closeModal()"
        >
        </code-text>
        <preview :isShow="current === 6" :content="content" @closeEvent="closeModal()"></preview>
      </div>
    </div>
  </div>
</template>

<script>
import Face from './face.vue'
import UploadImage from './image.vue'
import LinkAdd from './link.vue'
import Quote from './quote.vue'
import CodeText from './code.vue'
import Preview from './preview.vue'
export default {
  name: 'editor',
  props: ['lastContent'],
  components: {
    Face,
    UploadImage,
    LinkAdd,
    Quote,
    CodeText,
    Preview,
  },
  data() {
    return {
      current: 5,
      codeHeight: 0,
      codeWidth: 0,
      content: '',
      pos: 0,
    }
  },
  watch: {
    lastContent(newval) {
      if (newval) {
        this.content = this.lastContent
      }
    },
  },
  updated() {
    this.$emit('changeContent', this.content)
  },
  mounted() {
    this.$nextTick(() => {
      document.querySelector('body').addEventListener('click', this.handleBodyClick)
    })

    this.codeWidth = this.$refs.textEdit.offsetWidth - 60
    this.codeHeight = this.$refs.textEdit.offsetHeight - 80
    window.addEventListener('resize', () => {
      this.codeWidth = this.$refs.textEdit.offsetWidth - 60
      this.codeHeight = this.$refs.textEdit.offsetHeight - 80
    })
  },
  destroyed() {
    document.querySelector('body').removeEventListener('click', this.handleBodyClick)
  },
  methods: {
    focusEvent() {
      this.getPos()
    },
    blurEvent() {
      this.getPos()
    },
    getPos() {
      let cursorPos = 0
      let elem = document.getElementById('edit')
      if (document.selection) {
        // IE
        let selectRange = document.selection.createRange()
        selectRange.MoveStart('character', -elem.value.length)
        cursorPos = selectRange.text.length
      } else if (elem.selectionStart || elem.selectionStart === '0') {
        cursorPos = elem.selectionStart
      }
      this.pos = cursorPos
    },
    addFace(item) {
      console.log('🚀 ~ file: Index.vue ~ line 74 ~ addFace ~ item', item)
      const insertContent = `  face${item}`
      this.insert(insertContent)
      this.pos += insertContent.length
    },
    addPic(item) {
      const insertContent = `  img[${item}]`
      this.insert(insertContent)
      this.pos += insertContent.length
    },
    addLink(item) {
      console.log('🚀 ~ file: Index.vue ~ line 74 ~ addFace ~ item', item)
      const insertContent = `  a(${item})[${item}]`
      this.insert(insertContent)
      this.pos += insertContent.length
    },
    addQuote(item) {
      console.log('🚀 ~ file: Index.vue ~ line 74 ~ addFace ~ item', item)
      const insertContent = `  \n[quote]\n${item}\n[/quote]`
      this.insert(insertContent)
      this.pos += insertContent.length
    },
    addCode(item) {
      console.log('🚀 ~ file: Index.vue ~ line 74 ~ addFace ~ item', item)
      const insertContent = `  \n[pre]${item}\n[/pre]`
      this.insert(insertContent)
      this.pos += insertContent.length
    },
    addHr() {
      this.insert(` \n[hr]\n`)
      this.pos += 10
    },
    insert(value) {
      if (typeof this.content === 'undefined') {
        return
      }
      let tmp = this.content.split('')
      tmp.splice(this.pos, 0, value)
      this.content = tmp.join('')
    },
    choose(val) {
      this.current = val
    },
    closeModal() {
      this.current = ''
    },
    handleBodyClick(e) {
      e.stopPropagation()
      if (!(this.$refs.icons.contains(e.target) || this.$refs.modal.contains(e.target))) {
        this.closeModal()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes bounceOut {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.05);
  }
  100% {
    opacity: 0;
    transform: scale(0.7);
  }
}

.fade-leave-active {
  animation: bounceOut 0.3s;
}
.fade-enter-active,
.fade-enter {
  animation: bounceIn 0.3s;
}

.fly-editor {
  height: 260px;
}
.quote {
  font-size: 22px;
  vertical-align: middle;
  position: relative;
  top: 4px;
}
.edit-warp {
  position: relative;
}
.edit-content {
  background: #f9f9f9;
  position: absolute;
  top: 45px;
  left: 0;
}
.layui-layer-prompt {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
</style>
