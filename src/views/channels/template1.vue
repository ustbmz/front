<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <home-list></home-list>
      </div>
      <div class="layui-col-md4">
        <side-hotlist></side-hotlist>
        <side-ads></side-ads>
        <side-links></side-links>
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/content/List.vue";
import HotList from "@/components/sidebar/HotList.vue";
import Ads from "@/components/sidebar/Ads.vue";
import Links from "@/components/sidebar/Links.vue";
export default {
  components: {
    "home-list": List,
    "side-hotlist": HotList,
    "side-links": Links,
    "side-ads": Ads,
  },
};
</script>

<style lang="scss" scoped>
</style>