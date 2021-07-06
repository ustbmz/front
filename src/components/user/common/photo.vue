<template>
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <div class="avatar-add">
      <p>建议尺寸168*168，支持jpg、png、gif，最大不能超过50KB</p>
      <label for="pic" class="layui-btn upload-img">
        <i class="layui-icon">&#xe67c;</i>
        上传头像
      </label>
      <input
        id="pic"
        type="file"
        name="file"
        accept="image/jpg,image/gif,image/png,image/jpeg"
        @change="upload"
        style="display: none"
      />
      <img :src="pic" />
      <span class="loading"></span>
    </div>
  </div>
</template>

<script>
import { uploadImg } from '@/api/content'
import config from '@/config/index'
import { updateUserInfo } from '@/api/user'
export default {
  name: 'pic-upload',
  data() {
    return {
      pic: '/img/user02.jpeg',
      formData: '',
    }
  },
  mounted() {
    if (this.$store.state.userInfo && this.$store.state.userInfo.pic) {
      this.pic = this.$store.state.userInfo.pic
    }
  },
  methods: {
    upload(e) {
      console.log('🚀 ~ file: photo.vue ~ line 34 ~ e', e)
      let file = e.target.files
      let formDate = new FormData()
      formDate.append('file', file[0])
      // 上传图片
      uploadImg(formDate).then(res => {
        if (res.code === 200) {
          this.pic =
            process.env.NODE_ENV === 'production'
              ? config.baseUrl.pro + res.data
              : config.baseUrl.dev + res.data
          // 更新用户资料
          let user = this.$store.state.userInfo
          user.pic = this.pic
          updateUserInfo(user).then(res => {
            if (res.code === 200) {
              this.$store.commit('setUserInfo', user)
              this.$alert('头像更新成功')
            }
          })
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
