<template>
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <form action="/user/repass" method="post">
      <div class="layui-form-item">
        <label for="L_nowpass" class="layui-form-label">当前密码</label>
        <div class="layui-input-inline">
          <input
            type="password"
            id="L_nowpass"
            name="nowpass"
            required
            lay-verify="required"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>
      <div class="layui-form-item">
        <label for="L_pass" class="layui-form-label">新密码</label>
        <div class="layui-input-inline">
          <input
            type="password"
            id="L_pass"
            name="pass"
            required
            lay-verify="required"
            autocomplete="off"
            class="layui-input"
          />
        </div>
        <div class="layui-form-mid layui-word-aux">6到16个字符</div>
      </div>
      <div class="layui-form-item">
        <label for="L_repass" class="layui-form-label">确认密码</label>
        <div class="layui-input-inline">
          <input
            type="password"
            id="L_repass"
            name="repass"
            required
            lay-verify="required"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>
      <div class="layui-form-item">
        <button class="layui-btn" key="set-mine" lay-filter="*" lay-submit>
          确认修改
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>