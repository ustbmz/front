<template>
  <div class="fly-panel">
    <div class="fly-panel-title fly-filter">
      <a>置顶</a>
      <a
        href="#signin"
        class="layui-hide-sm layui-show-xs-block fly-right"
        id="LAY_goSignin"
        style="color: #ff5722"
      >
        去签到
      </a>
    </div>
    <list-item :lists="lists"></list-item>
  </div>
</template>

<script>
import ListItem from "./Listitem.vue";
export default {
  name: "topList",
  components: {
    ListItem,
  },
  data() {
    return {
      status: "",
      tag: "",
      sort: "",
      page: 0,
      limit: 20,
      lists: [
        {
          uid: {
            name: "测试用户",
            isVip: 1,
          },
          title: "大前端课程",
          content: "",
          created: "2020-20-20",
          fav: 40,
          reads: 10,
          catelog: "ask",
          isEnd: 0,
          answer: "0",
          status: 0,
          sort: 0,
          isTop: 0,
          tags: [
            {
              name: "精华",
              class: "layui-bg-red",
            },
            {
              name: "热门",
              class: "layui-bg-blue",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>