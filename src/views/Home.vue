<template>
  <div class="layui-container">
    <home-panel></home-panel>
    <div class="layui-container">
      <div class="layui-row layui-col-space15">
        <div class="layui-col-md8">
          <home-list></home-list>
        </div>
        <div class="layui-col-md4">
          <side-tips></side-tips>
          <side-sign></side-sign>
          <side-hotlist></side-hotlist>
          <side-ads></side-ads>
          <side-links></side-links>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Panle from "@/components/Panle.vue";
import List from "@/components/content/List.vue";
import Ads from "@/components/sidebar/Ads.vue";
import HotList from "@/components/sidebar/HotList.vue";
import Links from "@/components/sidebar/Links.vue";
import Sign from "@/components/sidebar/Sign.vue";
import Tips from "@/components/sidebar/Tips.vue";

export default {
  name: "home",
  components: {
    "home-panel": Panle,
    "home-list": List,
    "side-ads": Ads,
    "side-hotlist": HotList,
    "side-links": Links,
    "side-sign": Sign,
    "side-tips": Tips,
  },
};
</script>

<style lang="scss" scoped>
</style>