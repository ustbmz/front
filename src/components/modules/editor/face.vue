<template>
  <transition name="fade">
    <div class="layui-layer layui-layer-tips layui-edit-face edit-content">
      <div class="layui-layer-content" v-show="isShow">
        <ul class="layui-clear">
          <li v-for="(value,key) in list" :key="key" @click="handleFaceClick(key)">
            <img :src="value" alt>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import faces from '@/assets/js/face'
  export default {
    name:'Face',
    props:['isShow','ctrl'],
    data () {
      return {
        list:faces
      }
    },
    methods: {
      handleFaceClick(item){
        this.$emit('addEvent',item)
      },
      handleBodyClick(e){
        // 阻止事件冒泡
        e.stopPropagation()
        // 如果face未显示 ，直接return
        if(!this.isShow){return}
        console.log('🚀 ~ file: face.vue ~ line 35 ~ handleBodyClick ~ e', e)
        // 触发关闭本组件的关闭时间，改变isShow的状态
        // 判断是否点击位置为icon外部分
        if(!this.ctrl.contains(e.target)){
          this.$emit('closeEvent')
        }
      }
    },
    mounted () {
      console.log(this.ctrl);
      document.querySelector('body').addEventListener('click',this.handleBodyClick)
    },
    destroyed () {
       document.querySelector('body').removeEventListener('click',this.handleBodyClick)
    }
  }
</script>

<style lang="scss" scoped>
.edit-content{
  position: absolute;
  top: 45px;
  left: 0;
}

</style>