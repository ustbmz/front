<template>
  <div class="fly-panel fly-panel-user layui-show" pad20>
    <div
      class="layui-tab layui-tab-brief "
      lay-filter="user"
      id="LAY_msg"
      style="margin-top: 15px"
    >
      <button class="layui-btn layui-btn-danger layui-hide" id="LAY_delallmsg">
        清空全部消息
      </button>
      <div id="LAY_minemsg" style="margin-top: 10px"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-msg",
};
</script>

<style lang="scss" scoped>
</style>