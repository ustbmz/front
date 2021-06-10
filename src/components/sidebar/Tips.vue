<template>
  <div class="fly-panel">
    <h3 class="fly-panel-title">温馨通道</h3>
    <div class="fly-panel-main layui-row">
      <ul class="layui-clear ul-quick">
        <li class="layui-col-xs6">
          <a>mock test date</a>
        </li>
        <li class="layui-col-xs6">
          <a>mock test date</a>
        </li>
        <li class="layui-col-xs6">
          <a>mock test date</a>
        </li>
        <li class="layui-col-xs6">
          <a>mock test date</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "tips",
};
</script>

<style lang="scss" scoped>
$border-color:#f2f2f2;
.fly-panel-main{
  padding: 15px;
}
.ul-quick{
  border: solid 1px $border-color;
  border-bottom: none;
  border-right: none;
  .layui-col-xs6{
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    overflow: hidden;
    white-space: nowrap;
    border: 1px solid $border-color;
    text-align: center;
    //如果超长，显示三个点
    text-overflow: ellipsis;
    border-left: none;
    border-top: none;
    a{
      display: block;
    }
  }
}
</style>