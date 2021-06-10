<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <home-list></home-list>
      </div>
      <div class="layui-col-md4">
        <side-sign></side-sign>
        <side-hotlist></side-hotlist>
        <side-links></side-links>
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/content/List.vue";
import HotList from "@/components/sidebar/HotList.vue";
import Links from "@/components/sidebar/Links.vue";
import Sign from "@/components/sidebar/Sign.vue";
export default {
  components: {
    "home-list": List,
    "side-hotlist": HotList,
    "side-links": Links,
    "side-sign": Sign,
  },
};
</script>

<style lang="scss" scoped>
</style>