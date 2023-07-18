<template>
  <div class="model" v-show="isShow">
    <div class="mask" @click="close()"></div>
    <div class="layui-layer layui-layer-page info" :class="{ active: isShow }">
      <div class="layui-layui-title pl2 pr2">
        签到说明
        <i class="customfont icon-close pull-right" @click="close()"></i>
      </div>
      <div class="layui-layer-content pd2">
        <div class="layui-text">
          <blockquote class="layui-elem-quote">
            "签到"可获得社区积分，规则如下
          </blockquote>
          <div class="layui-table">
            <thead>
              <tr>
                <th>&nbsp; 连续签到天数</th>
                <th>&nbsp; 每天可获积分</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&lt;5</td>
                <td>5</td>
              </tr>
              <tr>
                <td>&ge;5</td>
                <td>10</td>
              </tr>
              <tr>
                <td>&ge;15</td>
                <td>15</td>
              </tr>
              <tr>
                <td>&ge;30</td>
                <td>20</td>
              </tr>
              <tr>
                <td>&ge;100</td>
                <td>30</td>
              </tr>
              <tr>
                <td>&ge;365</td>
                <td>50</td>
              </tr>
            </tbody>
            <div>
              <p>中间若有间隔，则连续天数重新计算</p>
              <p class="orange">不可复用程序自动签到，否则积分自动清零</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sign-info",
  props: {
    isShow:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      lists: [
        {
          name: "测试用户1",
          created:'2020-12-21',
          count: 4,
        },
        {
          name: "测试用户2",
          created:'2020-12-21',
          count: 3,
        },
        {
          name: "测试用户3",
          created:'2020-12-21',
          count: 77,
        },
        {
          name: "测试用户4",
          created:'2020-12-21',
          count: 66,
        },
        {
          name: "测试用户5",
          created:'2020-12-21',
          count: 88,
        },
      ],
    }
  },
  methods: {
    close () {
      this.$emit('update:isShow', false)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>