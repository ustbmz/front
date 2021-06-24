<template>
  <body>
    <div class="layui-container flex">
        <div class="title">404</div>
    </div>
  </body>
</template>

<script>
export default {
  name: "notFound",
};
</script>

<style lang="scss" scoped>
.flex{
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;
}

.title {
  font-size: 72px;
  margin-bottom: 40px;
}
</style>