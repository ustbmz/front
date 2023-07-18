<template>
  <div class="layui-container flex">
    <div class="layui-row pd3">是否确认更新邮箱地址为 ：{{ username }}</div>
    <div class="layui-row">
      <div
        class="layui-btn"
        @click="confirm()"
        :class="{ 'layui-btn-disabled': isSend }"
      >
        确认更新
      </div>
      <div class="layui-btn layui-btn-primary">
        <router-link to="/">返回首页</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { resetEmail } from '@/api/user';
export default {
  name: 'confirm',
  data() {
    return {
      isSend: false,
      username: '',
      userinfoObj: {},
    };
  },
  mounted() {
    let queryStr = window.location.href.replace(/.*\?/, '');
    let test = queryStr.split('&');
    

    let newmap = [];
    test.map((item) => {
      newmap.push(item.split('='));
    });
    if(newmap.length ===1){
      this.$router.push('/notFound')
      return 
    }
    this.userinfoObj = {
      key: newmap[0][1],
      username: newmap[1][1],
    };
    this.username = decodeURIComponent(this.userinfoObj.username);
    
  },
  methods: {
    confirm() {
      this.userinfoObj.username = this.username;
      resetEmail(this.userinfoObj).then((res) => {
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
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>