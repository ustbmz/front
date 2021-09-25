<template >
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <ul class="app-bind">
      <li class="fly-msg">
        <i class="iconfont icon-qq"></i>
        <span>已成功绑定，您可以使用QQ帐号直接登录，当然，您也可以</span>
        <a href="javascript:;" class="acc-unbind" type="qq_id">解除绑定</a>
        <span>，即可使用QQ帐号登录</span>
      </li>
      <li class="fly-msg">
        <i class="iconfont icon-weibo"></i>
        <span>已成功绑定，您可以使用微博直接登录，当然，您也可以</span>
        <a href="javascript:;" class="acc-unbind" type="weibo_id">解除绑定</a>
        <span>，即可使用微博帐号登录</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.icon-qq{
  color: goldenrod
}
.icon-weibo{
  color: rgb(211, 52, 55);
}
</style>