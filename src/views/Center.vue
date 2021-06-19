<template>
  <div class="layui-container fly-marginTop fly-user-main">
    <ul class="layui-nav layui-nav-tree layui-nav-side" lay-filter="test">
      <!-- 侧边导航: <ul class="layui-nav layui-nav-tree layui-nav-side"> -->
      <li
        class="layui-nav-item"
        v-for="(item, index) in menuList"
        :key="'menu' + index"
      >
        <router-link :to="{ name: item.link }" :active-class="item.activeClass">
          <i class="customfont" :class="item.icon"></i>
          {{ item.name }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "center",
  data() {
    return {
      menuList: [
        {
          name: "我的主页",
          icon: "icon-home",
          link: "home",
        },
        {
          name: "用户中心",
          icon: "icon-user",
          link: "center",
        },
        {
          name: "基本设置",
          icon: "icon-Setting",
          link: "userinfo",
          activeClass: "layui-this",
        },
        {
          name: "我的帖子",
          icon: "icon-document",
          link: "post",
        },
        {
          name: "我的消息",
          icon: "icon-Message",
          link: "msg",
        },
        {
          name: "其他设置",
          icon: "icon-Other",
          link: "other",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
.customfont {
  margin-right: 10px;
}
</style>