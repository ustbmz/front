<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-form layui-form-pane layui-tab-item layui-show">
        <div class="layui-row pt3 pb2 pl1 font">
          hi, {{ username }} 您即将重置登陆密码
        </div>
        <div class="layui-form-item">
          <label for="L_pass" class="layui-form-label">新密码</label>
          <div class="layui-input-inline">
            <input
              type="password"
              v-model="password"
              required
              lay-verify="required"
              autocomplete="off"
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
              v-model="password2"
              lay-verify="required"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-form-item pt1">
          <button class="layui-btn layui-btn-primary">返回首页</button>
          <button
            class="layui-btn"
            style="margin-left: 112px"
            @click="submit()"
          >
            确认重置
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { resetPasswd } from '@/api/user';
export default {
  name: 'reset',
  data() {
    return {
      username: '',
      password: '',
      password2: '',
    };
  },
  mounted() {
    let queryStr = window.location.href.replace(/.*\?/, '');

    let test = queryStr.split('&');
    let newmap = [];
    test.map((item) => {
      newmap.push(item.split('='));
    });
    this.userinfoObj = {
      username: newmap[0][1],
    };
    this.username = decodeURIComponent(this.userinfoObj.username);
    // if (this.username === 'undefined') {
    //   this.$router.push('/notFound');
    // }
  },
  methods: {
    submit() {
      let obj = {
        username: this.username,
        password: this.password,
      };
      resetPasswd(obj).then((res) => {
        if (res.code === 200) {
          this.isSend = true;
          this.$alert(res.msg);
          setTimeout(() => {
            this.$router.push('/');
          }, 1000);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  width: 50%;
  min-height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.font {
  font-size: 16px;
  color: #333;
}
</style>