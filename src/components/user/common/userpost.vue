<template>
  <div>
    <table class="layui-table text-center">
      <thead>
        <tr class="text-center">
          <td>
            <div class="layui-table-cell pl0">
              我发表的帖子
            </div>
          </td>
          <td>
            <div class="layui-table-cell pl0">
              状态
            </div>
          </td>
          <td>
            <div class="layui-table-cell pl0">
              结贴
            </div>
          </td>
          <td>
            <div class="layui-table-cell pl0">
              发表时间
            </div>
          </td>
          <td>
            <div class="layui-table-cell pl0">
              数据
            </div>
          </td>
          <td>
            <div class="layui-table-cell pl0">
              操作
            </div>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >测试帖子标题数据</td>
          <td>正常</td>
          <td>已结帖</td>
          <td>2016-11-29</td>
          <td>10阅/2答</td>
          <td>
            <div class="layui-btn layui-btn-xs">编辑</div>
            <div class="layui-btn layui-btn-xs layui-btn-danger">删除</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "user-post",
};
</script>

<style lang="scss" scoped>
</style>