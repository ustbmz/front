<template>
  <div id="app">
    <imooc-header></imooc-header>
    <router-view></router-view>
    <imooc-footer></imooc-footer>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "app",
  components: {
    "imooc-header": Header,
    "imooc-footer": Footer,
  },
};
</script>

<style lang="scss">
@import "assets/layui/css/layui.css";
@import "assets/css/global.css";
@import "assets/layui/css/modules/layer/default/layer.css";

@for $i from 0 to 5 {
  .pd#{$i} {
    padding: $i * 10 + px;
  }
  .pl#{$i} {
    padding-left: $i * 10 + px;
  }
  .pr#{$i} {
    padding-right: $i * 10 + px;
  }
  .mt#{$i} {
    margin-top: $i * 10 + px;
  }
  .mr#{$i} {
    margin-right: $i * 10 + px;
  }
  .ml#{$i} {
    margin-left: $i * 10 + px;
  }
  .mg#{$i} {
    margin: $i * 10 + px;
  }
}
// 公用样式
.svg {
  position: relative;
  top: -4px;
}
.gray {
  color: #999;
}

.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
</style>
