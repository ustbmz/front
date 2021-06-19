<template>
  <div class="fly-panel fly-signin">
    <div class="fly-panel-title">
      签到
      <i class="fly-mid"></i>
      <a
        href="javascript:void(0);"
        class="fly-link"
        id="LAY_signinHelp"
        @click="showInfo()"
      >
        说明
      </a>
      <i class="fly-mid"></i>
      <a
        href="javascript:;"
        class="fly-link"
        id="LAY_signinTop"
        @click="showInfo(1)"
      >
        活跃榜
        <span class="layui-badge-dot"></span>
      </a>
      <span class="fly-signin-days">
        已连续签到
        <cite>16</cite>
        天
      </span>
    </div>
    <div class="fly-panel-main fly-signin-main">
      <button class="layui-btn layui-btn-danger" id="LAY_signin">
        今日签到
      </button>
      <span>
        可获得
        <cite>5</cite>
        飞吻
      </span>

      <!-- 已签到状态 -->
      <!--
          <button class="layui-btn layui-btn-disabled">今日已签到</button>
          <span>获得了<cite>20</cite>飞吻</span>
          -->
    </div>
    <div class="model" v-show="showDes">
      <div class="mask" @click="close()"></div>
      <div
        class="layui-layer layui-layer-page info"
        :class="{ active: showDes }"
      >
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
    <div class="model" v-show="showTop">
      <div class="mask" @click="close()"></div>
      <div
        class="layui-layer layui-layer-page info"
        :class="{ active: showDes }"
      >
        <div class="layui-layui-title pl2 pr2">
          签到活跃榜 -- TOP 10
          <i class="customfont icon-close pull-right" @click="close()"></i>
        </div>
        <div class="layui-layer-content pd0">
          <div class="layui-text">
            <div class="layui-tab layui-tab-berif">
              <div class="layui-tab-title">
                <li :class="{'layui-this':current===0}" @click="choose(0)">最新签到</li>
                <li :class="{'layui-this':current===1}" @click="choose(1)">今日最快</li>
                <li :class="{'layui-this':current===2}" @click="choose(2)">总签到榜</li>
              </div>
              <div class="layui-tab-content">
                <ul class="layui-tab-item layui-show">
                  <li v-for="(item, index) in lists" :key="'signli' + index">
                    <img src="../../assets/images/avatar/0.jpg" />
                    <cite>{{ item.name }}</cite>
                    <span class="fly-gray" v-if="current !== 2">
                      签到于  
                      <i class="orange">{{item.created}}</i>
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
  </div>
</template>

<script>
export default {
  name: "sign",
  data() {
    return {
      showDes: false,
      showTop: false,
      current:0,
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
    };
  },
  methods: {
    showInfo(val) {
      if (val) {
        this.showTop = true;
      } else {
        this.showDes = true;
      }
    },
    close() {
      this.showDes = false;
      this.showTop = false;
    },
    choose(val){
      this.current = val
    }
  },
};
</script>

<style lang="scss" scoped>
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.mask {
  z-index: 20000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
}
.layui-layer {
  z-index: 21000;
  position: fixed;
  width: 300px;
  height: 480px;
  top: 50%;
  left: 50%;
  margin-top: -240px;
  margin-left: -150px;
  background: #fff;
  &.active {
    animation-fill-mode: both;
    // 动画持续时间
    animation-duration: 0.2s;
    animation-name: bounceIn;
  }
  .layui-layui-title {
    height: 42px;
    line-height: 42px;
    background: #f8f8f8;
    color: #333;
  }
}
.layui-tab-item {
  line-height: 40px;
  li{
    border-bottom: 1px solid dotted #dcdcdc;
    &:last-child{
      border-bottom: none;
    }
  }
  img {
    padding: 5px;
    width: 40px;
    height: 40px;
  }
}
</style>