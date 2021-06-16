<template>
  <div class="fly-panel">
    <h3 class="fly-panel-title">温馨通道</h3>
    <div class="fly-panel-main layui-row">
      <ul class="layui-clear ul-quick">
        <li class="layui-col-xs6" v-for="(item,index) in lists" :key="'tips'+index">
          <a :href="item.link" target="_blank">{{item.tilte}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getTips } from "@/api/content";
export default {
  name: "tips",
  data() {
    return {
      lists: [
        {
          tilte: "github",
          link: "https://www.github.com",
        },
        {
          tilte: "imooc",
          link: "https://www.github.com",
        },
        {
          tilte: "gitee",
          link: "https://www.gitee.com",
        },
        {
          tilte: "twitter",
          link: "https://www.github.com",
        },
      ],
    };
  },
  mounted() {
    // this._getTips();
  },
  methods: {
    _getTips() {
      getTips()
        .then((res) => {
          if (res.code === 200) {
            this.lists = res.data;
          }
        })
        .catch((err) => {
          this.$alert(err.msg);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
$border-color: #f2f2f2;
.fly-panel-main {
  padding: 15px;
}
.ul-quick {
  border: solid 1px $border-color;
  border-bottom: none;
  border-right: none;
  .layui-col-xs6 {
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
    a {
      display: block;
    }
  }
}
</style>