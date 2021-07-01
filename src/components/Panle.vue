<template>
  <div class="fly-panel fly-column">
    <div class="layui-container">
      <ul class="layui-clear">
        <router-link tag="li" to="/index" class="layui-hide-xs">
          <a>首页</a>
        </router-link>
        <router-link
          tag="li"
          v-for="(item, index) in List"
          :key="'panel' + index"
          :to="item.path"
        >
          <a>
            {{ item.name }}
            <span class="layui-badge-dot" v-if="item.isNew"></span>
          </a>
        </router-link>

        <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
          <span class="fly-mid"></span>
        </li>

        <!-- 用户登入后显示 -->
        <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
          <a href="user/index.html">我发表的贴</a>
        </li>
        <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
          <a href="user/index.html#collection">我收藏的贴</a>
        </li>
      </ul>

      <div class="fly-column-right layui-hide-xs">
        <span class="fly-search"><i class="layui-icon"></i></span>
        <router-link to="/add"  class="layui-btn">发表新帖</router-link>
      </div>
      <div
        class="layui-hide-sm layui-show-xs-block"
        style="margin-top: -10px; padding-bottom: 10px; text-align: center"
      >
        <a href="jie/add.html" class="layui-btn">发表新帖</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [
        {
          name: "提问",
          path: "/index/ask",
          isNew: false,
        },
        {
          name: "分享",
          path: "/index/share",
          isNew: true,
        },
        {
          name: "讨论",
          path: "/index/discuss",
          isNew: false,
        },
        {
          name: "建议",
          path: "/index/advise",
          isNew: false,
        },
        {
          name: "公告",
          path: "/index/notice",
          isNew: false,
        },
        {
          name: "动态",
          path: "/index/logs",
          isNew: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
