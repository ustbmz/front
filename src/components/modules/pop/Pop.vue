<template>
  <div
    class="tips animation"
    v-show="isShow"
    :class="{ shake: aniType === 'shake' }"
    ref="tips"
  >
    <div class="content">
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  name: "pop",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    msg: {
      type: String,
      default: "默认pop内容",
    },
    aniType: {
      type: String,
      default: "",
    },
  },
  watch: {
    isShow (newval, oldval) {
      if (newval !== oldval && newval === true) {
        setTimeout(() => {
          let width = this.$refs.tips.clientWidth;
          let height = this.$refs.tips.clientHeight;
          this.$refs.tips.style.marginLeft = -width / 2 + "px";
          this.$refs.tips.style.marginTop = -height / 2 + "px";
          this.isShow = true;
        }, 0);
        setTimeout(() => {
          this.aniType = "";
          this.msg = "";
          this.isShow = false;
        }, 3000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  15%,
  45%,
  75% {
    transform: translateX(-10px);
  }
  30%,
  60%,
  85% {
    transform: translateX(10px);
  }
}
.animation {
  animation-duration: 0.3s;
  animation-fill-mode: both;
}
.tips {
  position: fixed;
  top: 50%;
  left: 50%;
}
.content {
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  border-radius: 8px;
  padding: 10px 15px;
}
.shake {
  animation-name: shake;
}
</style>