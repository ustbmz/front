<template>
  <div class="model" v-show="isShow">
    <div class="mask" @click="close()"></div>
    <div class="layui-layer layui-layer-page info" :class="{ active: isShow }">
      <div class="layui-layui-title pl2 pr2">
        签到活跃榜 -- TOP 10
        <i class="customfont icon-close pull-right" @click="close()"></i>
      </div>
      <div class="layui-layer-content pd0">
        <div class="layui-text">
          <div class="layui-tab layui-tab-berif">
            <div class="layui-tab-title">
              <li :class="{ 'layui-this': current === 0 }" @click="choose(0)">
                最新签到
              </li>
              <li :class="{ 'layui-this': current === 1 }" @click="choose(1)">
                今日最快
              </li>
              <li :class="{ 'layui-this': current === 2 }" @click="choose(2)">
                总签到榜
              </li>
            </div>
            <div class="layui-tab-content">
              <ul class="layui-tab-item layui-show">
                <li v-for="(item, index) in lists" :key="'signli' + index">
                  <img src="/img/header.jpg" />
                  <cite>{{ item.name }}</cite>
                  <span class="fly-gray" v-if="current !== 2">
                    签到于
                    <i class="orange">{{ item.created }}</i>
                  </span>
                  <span class="fly-gray" v-else>
                    已经连续签到
                    <i class="orange">{{ item.count }}</i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sign-list",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      // 父子组件 sync用法 
      this.$emit("update:isShow", false);
    },
    choose(val){
      this.current = val
    }
  },
  data() {
    return {
      current: 0,
      lists: [
        {
          name: "测试用户1",
          created: "2020-12-21",
          count: 4,
        },
        {
          name: "测试用户2",
          created: "2020-12-21",
          count: 3,
        },
        {
          name: "测试用户3",
          created: "2020-12-21",
          count: 77,
        },
        {
          name: "测试用户4",
          created: "2020-12-21",
          count: 66,
        },
        {
          name: "测试用户5",
          created: "2020-12-21",
          count: 88,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>