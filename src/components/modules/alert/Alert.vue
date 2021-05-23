<template>
  <div v-show="isShow">
    <div class="alert">
      <div class="flex">{{ msg }}</div>
      <div v-if="type === 'alert'">
        <div class="btnCommon success" @click="close()">确认</div>
      </div>
      <div v-else class="space-round">
        <div class="btnCommon cancel" @click="cancelEvent()">取消</div>
        <div class="btnCommon success" @click="successEvent()">确认</div>
      </div>
    </div>
    <div class="mask" @click="closeMask()"></div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "alter",
    },
    msg: {
      type: String,
      default: "alter text telling content",
    },
    isShow: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Function,
      default: () => {
        console.log("click success");
      },
    },
    cancel: {
      type: Function,
      default: () => {
        console.log("click cancel");
      },
    },
  },
  methods: {
    close() {
      this.isShow = false;
    },
    closeMask() {
      if (this.type === "alert") {
        this.close();
      }
    },
    cancelEvent() {
      this.cancel();
      this.close();
    },
    successEvent() {
      this.success();
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
$btn-main: #009688;
$btn-dark: darken($btn-main, 10%);

.btnCommon {
  width: 105px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 6px;
  &.success {
    background: $btn-main;
    color: #fff;
    &:hover {
      background: $btn-dark;
    }
  }
  &.cancel{
    background: #EDEDED;
    color: #333;
  }
}
.space-round{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 0px 10px;
  width: 100%;
}

.alert {
  width: 300px;
  height: 150px;
  position: fixed;
  background: #fff;
  border-radius: 8px;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -75px;
  padding: 20px 10px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.05);
  z-index: 3000;
  // 使用flex布局
  display: flex;
  // 布局方向  竖向排列 不换行
  flex-flow: column nowrap;
  // 垂直轴向 排布方式
  justify-content: center;
  // 交叉轴 排布方式
  align-items: center;
}

.flex {
  flex: 1;
  // 使文字纵向居中
  justify-content: center;
  align-items: center;
  display: flex;
}
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 2000;
}
</style>
