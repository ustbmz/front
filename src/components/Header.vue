<template>
  <div class="fly-header layui-bg-black">
    <div class="layui-container">
      <ul class="layui-nav layui-hide-xs">
        <li class="layui-nav-item layui-this">
          <router-link :to="{ name: 'index' }">
            <i class="iconfont icon-jiaoliu"></i>
            首页
          </router-link>
        </li>
        <li class="layui-nav-item">
          <a href="https://www.ustbmz.com" target="_blank">
            <i class="iconfont icon-ui"></i>
            博客
          </a>
        </li>
      </ul>

      <ul class="layui-nav fly-nav-user">
        <!-- 未登入的状态 -->
        <template v-if="!isShow">
          <li class="layui-nav-item">
            <router-link
              class="iconfont icon-touxiang layui-hide-xs"
              :to="{ name: 'login' }"
            ></router-link>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{ name: 'login' }"><a>登入</a></router-link>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{ name: 'reg' }"><a>注册</a></router-link>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <router-link
              to="/goQQ"
              onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
              title="QQ登入"
              class="iconfont icon-qq"
            ></router-link>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <router-link
              to="/goWb"
              onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
              title="微博登入"
              class="iconfont icon-weibo"
            ></router-link>
          </li>
        </template>
        <template v-else>
          <li class="layui-nav-item" @mouseover="show()" @mouseleave="hide()">
            <router-link class="fly-nav-avatar" :to="{ name: 'home', params: { uid: user._id } }">
              <cite class="layui-hide-xs">{{ user.name }}</cite>
              <i class="layui-badge fly-badge-vip layui-hide-xs" v-if="user.isVip !== '0'">
                {{ user.isVip }}
              </i>
              <img :src="user.pic" />
            </router-link>
            <dl
              class="layui-nav-child layui-anim layui-anim-downbit"
              :class="{ 'layui-show': isHover }"
            >
              <dd>
                <router-link :to="{ name: 'center' }">
                  <i class="layui-icon">&#xe620;</i>
                  基本设置
                </router-link>
              </dd>
              <dd>
                <router-link :to="{ name: 'msg' }">
                  <i class="iconfont icon-tongzhi" style="top: 4px"></i>
                  我的消息
                </router-link>
              </dd>
              <dd>
                <router-link :to="{ name: 'home', params: { uid: user._id } }">
                  <i class="layui-icon" style="margin-left: 2px; font-size: 22px">
                    &#xe68e;
                  </i>
                  我的主页
                </router-link>
              </dd>
              <hr style="margin: 5px 0" />
              <dd>
                <a href="javascript:void(0)" @click="quit()" style="text-align: center">
                  退出
                </a>
              </dd>
            </dl>
          </li>
          <div class="fly-nav-msg">{{num}}</div>
          <div class="layui-layer-tips" v-show="hasMsg">
            <div class="layui-layer-content">
              您有{{ num }}条未读消息
              <i class="layui-layer-TipsG layui-layer-TipsB"></i>
            </div>
          </div>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      isHover: false,
      hoverContral: '',
      hasMsg:false
    }
  },
  watch: {
    num(newval, oldval) {
      if (newval !== oldval) {
        this.hasMsg = true
        setTimeout(() => {
          this.hasMsg = false
        }, 5000)
      }
    },
  },
  computed: {
    ...mapState({
      num: state => state.num,
    }),
    isShow: function() {
      return this.$store.state.isLogin
    },
    user: function() {
      return this.$store.state.userInfo
    },
  },
  methods: {
    show() {
      clearTimeout(this.hoverContral)
      this.hoverContral = setTimeout(() => {
        this.isHover = true
      }, 200)
    },
    hide() {
      clearTimeout(this.hoverContral)
      this.hoverContral = setTimeout(() => {
        this.isHover = false
      }, 300)
    },
    quit() {
      this.$confirm(
        '是否退出当前用户?',
        () => {
          // confirm 执行
          localStorage.clear()
          this.$store.commit('setUserInfo', '')
          this.$store.commit('setIsLogin', false)
          this.$store.commit('setToken', '')
          // 忽略重复路由
          this.$router.push('/', () => {})
        },
        () => {
          // cancel 执行
        }
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.fly-logo {
  left: -15px;
  top: -10px;
  margin-left: 15px;
}
.pdl20 {
  top: 0px;
  padding-left: 20px;
}
.layui-layer-tips {
  position: fixed;
  right: 0;
  white-space: nowrap;
  z-index: 3000;
}
</style>
