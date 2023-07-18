<template>
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <div class="layui-form-item">
      <label for="L_email" class="layui-form-label">邮箱</label>
      <div class="layui-input-inline">
        <input type="text" v-model="username" autocomplete="off" class="layui-input" />
      </div>
      <div class="layui-form-mid layui-word-aux">
        如果您在邮箱已激活的情况下，变更了邮箱，需
        <a href="/user/activate/" style="font-size: 12px; color: #4f99cf">
          重新验证邮箱
        </a>
        。
      </div>
    </div>
    <div class="layui-form-item">
      <label for="L_username" class="layui-form-label">昵称</label>
      <div class="layui-input-inline">
        <input
          type="text"
          v-model="name"
          lay-verify="required"
          autocomplete="off"
          class="layui-input"
        />
      </div>
    </div>
    <div class="layui-form-item">
      <label for="L_city" class="layui-form-label">性别</label>
      <div class="layui-inline">
        <div class="layui-input-inline">
          <input type="radio" name="sex" value="0" title="男" />
          <input type="radio" name="sex" value="1" title="女" />
        </div>
      </div>
    </div>
    <div class="layui-form-item">
      <label for="L_city" class="layui-form-label">城市</label>
      <div class="layui-input-inline">
        <input type="text" v-model="localtion" autocomplete="off" class="layui-input" />
      </div>
    </div>
    <div class="layui-form-item layui-form-text">
      <label for="L_sign" class="layui-form-label">签名</label>
      <div class="layui-input-block">
        <textarea
          placeholder="随便写些什么刷下存在感"
          v-model="regmark"
          class="layui-textarea"
          style="height: 80px"
        ></textarea>
      </div>
    </div>
    <div class="layui-form-item">
      <button class="layui-btn" @click="submit()">确认修改</button>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'
import { updateUserInfo } from '@/api/user'
export default {
  name: 'userinfo',
  data() {
    return {
      username: '',
      name: '',
      localtion: '',
      regmark: '',
      pic: '',
    }
  },
  mounted() {
    const { username, name, localtion, regmark } = store.state.userInfo
    this.username = username
    this.name = name
    this.localtion = localtion
    this.regmark = regmark
  },
  methods: {
    async submit() {
      if (this.username !== '' || this.name !== '') {
        updateUserInfo({
          username: this.username,
          name: this.name,
          localtion: this.localtion,
          regmark: this.regmark,
          pic: this.$store.state.userInfo.pic,
        }).then(res => {
          if (res.code === 200) {
            this.$store.commit('setUserInfo', {
              ...this.$store.state.userInfo,
              ...{
                username: this.username,
                name: this.name,
                localtion: this.localtion,
                regmark: this.regmark,
              },
            })
            this.$alert('数据更新成功')
          } else {
            this.$alert('数据更新失败')
          }
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
