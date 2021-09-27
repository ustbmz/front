<template>
  <body>
    <div class="layui-container flex">
      <img src="../assets/img/404.png" />
    </div>
  </body>
</template>

<script>
export default {
  name: 'notFound'
}
</script>

<style lang="scss" scoped>
.flex {
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;
}
img {
  height: 50%;
  width: 50%;
}
</style>
