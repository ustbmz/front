<template>
  <div class="fly-panel fly-panel-user" pad20>
    <div class="layui-tab layui-tab-brief">
      <div class="layui-tab-title">
        <li>
          <router-link :to="{ name: 'userpost' }">我发的帖子</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'usercollection' }">
            我收藏的帖子
          </router-link>
        </li>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-post",
};
</script>

<style lang="scss" scoped>
</style>