<template>
  <div class="fly-panel fly-signin">
    <div class="fly-panel-title" >
      签到
      <i class="fly-mid"></i>
      <a
        href="javascript:void(0);"
        class="fly-link"
        id="LAY_signinHelp"
        @click="showInfo()"
      >
        说明
      </a>
      <i class="fly-mid"></i>
      <a
        href="javascript:;"
        class="fly-link"
        id="LAY_signinTop"
        @click="showInfo(1)"
      >
        活跃榜
        <span class="layui-badge-dot"></span>
      </a>
      <span class="fly-signin-days">
        已连续签到
        <cite>{{ count }}</cite>
        天
      </span>
    </div>
    <div class="fly-panel-main fly-signin-main">
      <template v-if="!isSign">
        <button class="layui-btn layui-btn-danger" id="LAY_signin" @click="sign()">
          今日签到
        </button>
        <span>
          可获得
          <cite>{{ favs }}</cite>
          飞吻
        </span>
      </template>
      <template v-else>
        <!-- 已签到状态 -->
        <button class="layui-btn layui-btn-disabled">今日已签到</button>
        <span>
          获得了
          <cite>{{favs}}</cite>
          飞吻
        </span>
      </template>
    </div>
    <!-- 父组件 sync用法  -->
    <!-- 字组件不需要提交关闭事件让父组件取改变isShow的状态  -->
    <sign-info :isShow.sync="showDes"></sign-info>
    <sign-list :isShow.sync="showTop"></sign-list>
  </div>
</template>

<script>
import SignInfo from "./signContent/signInfo.vue";
import SignList from "./signContent/SignList.vue";
import { userSign } from "@/api/user";
export default {
  name: "sign",
  components: {
    SignInfo,
    SignList,
  },
  data() {
    return {
      isLogin:this.$store.state.isLogin ? this.$store.state.isLogin :false ,
      showDes: false,
      showTop: false,
      isSign: this.$store.state.userInfo.isSign ? this.$store.state.userInfo.isSign :false ,
      count:this.$store.state.userInfo.count ? this.$store.state.userInfo.count :0
    };
  },
  computed: {
    favs() {
      let fav = 0;
      let count = parseInt(this.count)

      if (this.$store.state.userinfo !== {}) {
        if (count <= 5) {
          fav = 5;
        } else if (count > 5 && count <= 15) {
          fav = 10;
        } else if (count > 15 && count <= 30) {
          fav = 15;
        } else if (count > 30 && count <= 100) {
          fav = 20;
        } else if (count > 100 && count <= 365) {
          fav = 50;
        }
        return fav;
      } else {
        return fav;
      }
    },
  },
  methods: {
    showInfo(val) {
      if (val) {
        this.showTop = true;
      } else {
        this.showDes = true;
      }
    },
    sign() {
      let userInfo = this.$store.state.userInfo
      if(!this.isLogin){
          this.$pop('shake','请先登陆')
          return
      }
      userSign().then((res) => {
        if (res.code === 200) {
          this.fav = res.favs
          this.count = res.count
          userInfo.isSign = true
          this.$store.commit('setUserInfo',userInfo)
          this.$pop('','签到成功')
          this.isSign = true
        }else{
          this.isSign = false
          this.$pop('','用户已签到')
        }
      });
    },
  },
};
</script>

<style lang="scss">
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.mask {
  z-index: 20000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
}
.layui-layer {
  z-index: 21000;
  position: fixed;
  width: 300px;
  height: 480px;
  top: 50%;
  left: 50%;
  margin-top: -240px;
  margin-left: -150px;
  background: #fff;
  &.active {
    animation-fill-mode: both;
    // 动画持续时间
    animation-duration: 0.2s;
    animation-name: bounceIn;
  }
  .layui-layui-title {
    height: 42px;
    line-height: 42px;
    background: #f8f8f8;
    color: #333;
  }
}
.layui-tab-item {
  line-height: 40px;
  li {
    border-bottom: 1px solid dotted #dcdcdc;
    &:last-child {
      border-bottom: none;
    }
  }
  img {
    padding: 5px;
    width: 40px;
    height: 40px;
  }
}
</style>