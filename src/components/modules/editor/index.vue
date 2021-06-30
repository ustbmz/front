<template>
  <div class="edit-warp">
    <div class="layui-from-item layui-form-text">
      <div class="layui-input-block">
        <div class="layui-unselect fly-edit">
          <span @click="()=>{this.faceStatus = !this.faceStatus}" ref="face"><i class="iconfont icon-yxj-expression"></i></span>
          <span><i class="iconfont icon-tupian"></i></span>
          <span><i class="iconfont icon-lianjie"></i></span>
          <span class="quote">”</span>
          <span><i class="iconfont icon-emwdaima"></i></span>
          <span>hr</span>
          <span><i class="iconfont icon-yulan"></i></span>
        </div>
        <textarea name="content"  class="layui-textarea fly-editor"></textarea>
      </div>
      <face :isShow="faceStatus" :ctrl="this.$refs.face" @closeEvent='()=>{this.faceStatus = false}'></face>
    </div>
  </div>
</template>

<script>
  import Face from './face.vue'
  export default {
    name:'editor',
    components: {
      Face
    },
    data () {
      return {
        faceStatus:false
      }
    }
  }
</script>

<style lang="scss" scoped>
@keyframes bounceIn{
  0%{
    opacity: 0;
    transform: scale(0.5);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes bounceOut{
  0%{
    transform: scale(1);
  }
  30%{
    transform: scale(1.05);
  }
  100%{
    opacity: 0;
    transform: scale(0.7);
  }
}

.fade-leave-active{
  animation: bounceOut 0.3s;
}
.fade-enter-active,
.fade-enter{
  animation: bounceIn 0.3s;
}

.fly-editor{
  height: 260px;
}
.quote{
  font-size: 22px;
  vertical-align: middle;
  position: relative;
  top:4px;
}
.edit-warp{
  position: relative;
}
</style>