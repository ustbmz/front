<template>
  <div class="fly-header layui-bg-black">
    <div class="layui-container">
      <ul class="layui-nav layui-hide-xs">
        <li class="layui-nav-item layui-this">
          <router-link :to="{name:'index'}">
            <i class="iconfont icon-jiaoliu"></i>
            首页
          </router-link>
        </li>
        <li class="layui-nav-item">
          <a href="https://www.layui.com/doc/" target="_blank">
            <i class="iconfont icon-ui"></i>
            框架
          </a>
        </li>
      </ul>

      <ul class="layui-nav fly-nav-user">
        <!-- 未登入的状态 -->
        <li class="layui-nav-item">
          <a
            class="iconfont icon-touxiang layui-hide-xs"
            href="../user/login.html"
          ></a>
        </li>
        <li class="layui-nav-item">
          <router-link :to="{name:'login'}"><a>登入</a></router-link>
        </li>
        <li class="layui-nav-item">
          <router-link :to="{name:'reg'}"><a>注册</a></router-link>
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

        <!-- 登入后的状态 -->
        <!--
      <li class="layui-nav-item">
        <a class="fly-nav-avatar" href="javascript:;">
          <cite class="layui-hide-xs">贤心</cite>
          <i class="iconfont icon-renzheng layui-hide-xs" title="认证信息：layui 作者"></i>
          <i class="layui-badge fly-badge-vip layui-hide-xs">VIP3</i>
          <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg">
        </a>
        <dl class="layui-nav-child">
          <dd><a href="user/set.html"><i class="layui-icon">&#xe620;</i>基本设置</a></dd>
          <dd><a href="user/message.html"><i class="iconfont icon-tongzhi" style="top: 4px;"></i>我的消息</a></dd>
          <dd><a href="user/home.html"><i class="layui-icon" style="margin-left: 2px; font-size: 22px;">&#xe68e;</i>我的主页</a></dd>
          <hr style="margin: 5px 0;">
          <dd><a href="/user/logout/" style="text-align: center;">退出</a></dd>
        </dl>
      </li>
        -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.fly-logo {
  left: -15px;
  top: -10px;
  margin-left: 15px;
}
.pdl20{
  top: 0px;
  padding-left: 20px;
}
</style>
