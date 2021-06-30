<template>
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <div class="layui-form-item">
      <label for="L_nowpass" class="layui-form-label">当前密码</label>
      <div class="layui-input-inline">
        <input
          type="password"
          v-model="oldpassword"
          required
          lay-verify="required"
          class="layui-input"
        />
      </div>
    </div>
    <div class="layui-form-item">
      <label for="L_pass" class="layui-form-label">新密码</label>
      <div class="layui-input-inline">
        <input
          type="password"
          v-model="newpassword"
          required
          lay-verify="required"
          class="layui-input"
        />
      </div>
      <div class="layui-form-mid layui-word-aux">6到16个字符</div>
    </div>
    <div class="layui-form-item">
      <label for="L_repass" class="layui-form-label">确认密码</label>
      <div class="layui-input-inline">
        <input
          type="password"
          v-model="newpassword2"
          required
          lay-verify="required"
          class="layui-input"
        />
      </div>
    </div>
    <div class="layui-form-item">
      <button class="layui-btn" @click="submit()">确认修改</button>
    </div>
  </div>
</template>

<script>
import { updatePassword } from '@/api/user';

export default {
  name: 'edit-password',
  data() {
    return {
      oldpassword: '',
      newpassword: '',
      newpassword2: '',
      username: this.$store.state.userInfo.username,
    };
  },
  methods: {
    submit() {
      if (this.newpassword === this.newpassword2) {
        updatePassword({
          username: this.username,
          password: this.oldpassword,
          newpassword: this.newpassword,
        }).then((res) => {
          if (res.code === 200) {
            this.$alert('密码修改成功,请重新登陆');
            setTimeout(() => {
              this.$router.push('/login');
            }, 2000);
          } else {
            this.$alert(res.msg);
          }
        });
      } else {
        this.$alert('两次输入密码不一致，请重新输入');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>