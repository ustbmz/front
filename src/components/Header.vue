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
            <a
              class="iconfont icon-touxiang layui-hide-xs"
              href="../user/login.html"
            ></a>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{ name: 'login' }"><a>登入</a></router-link>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{ name: 'reg' }"><a>注册</a></router-link>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a
              href
              onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
              title="QQ登入"
              class="iconfont icon-qq"
            ></a>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a
              href
              onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
              title="微博登入"
              class="iconfont icon-weibo"
            ></a>
          </li>
        </template>
        <template v-else>
          <li class="layui-nav-item" @mouseover="show()" @mouseleave="hide()">
            <a class="fly-nav-avatar" href="javascript:;">
              <cite class="layui-hide-xs">{{ user.name }}</cite>
              <i
                class="layui-badge fly-badge-vip layui-hide-xs"
                v-if="user.isVip !== '0'"
              >
                {{ user.isVip }}
              </i>
              <img :src="user.pic" />
            </a>
            <dl class="layui-nav-child layui-anim layui-anim-downbit" 
                :class="{'layui-show':isHover}">
              <dd>
                <a href="user/set.html">
                  <i class="layui-icon">&#xe620;</i>
                  基本设置
                </a>
              </dd>
              <dd>
                <a href="user/message.html">
                  <i class="iconfont icon-tongzhi" style="top: 4px"></i>
                  我的消息
                </a>
              </dd>
              <dd>
                <a href="user/home.html">
                  <i
                    class="layui-icon"
                    style="margin-left: 2px; font-size: 22px"
                  >
                    &#xe68e;
                  </i>
                  我的主页
                </a>
              </dd>
              <hr style="margin: 5px 0" />
              <dd>
                <a href="/user/logout/" style="text-align: center">退出</a>
              </dd>
            </dl>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
      isHover:false,
      hoverContral:''
    }
  },
  computed: {
    isShow: function () {
      return this.$store.state.islogin;
    },
    user: function () {
      return this.$store.state.userinfo;
    },
  },
  methods: {
    show(){
      clearTimeout(this.hoverContral)
      this.hoverContral = setTimeout(()=>{
        this.isHover = true
      },200)
    },
    hide(){
      clearTimeout(this.hoverContral)
       this.hoverContral = setTimeout(()=>{
        this.isHover = false
      },300)
    }
  }
};
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
</style>
