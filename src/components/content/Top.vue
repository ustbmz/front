<template>
  <div class="fly-panel">
    <div class="fly-panel-title fly-filter">
      <a>置顶</a>
      <a
        href="#signin"
        class="layui-hide-sm layui-show-xs-block fly-right"
        id="LAY_goSignin"
        style="color: #ff5722"
      >
        去签到
      </a>
    </div>
    <list-item :lists="lists" :isShow="false" :isEnd="isEnd"></list-item>
  </div>
</template>

<script>
import ListItem from "./Listitem.vue";
import { getList } from "@/api/content";

export default {
  name: "topList",
  components: {
    ListItem,
  },
  data() {
    return {
      catalog: "",
      isEnd:true,
      status: "",
      tag: "",
      sort: "",
      page: 0,
      limit: 20,
      lists: [],
    };
  },
  mounted(){
    this._getList()
  },
  methods: {
    _getList() {
      let options = {
        catalog: this.catalog,
        isTop: 1,
        page: this.page,
        limit: this.limit,
        sort: this.sort,
        tag: this.tag,
        status: this.status,
      };
      getList(options)
        .then((res) => {
          if (res.code === 200) {
            if (res.data.length < 20) {
              this.isEnd = true;
            }
            if (this.lists.length == 0) {
              this.lists = res.data;
            } else {
              this.lists = this.lists.concat(res.data);
            }
          }
        })
        .catch((err) => {
          this.$alert(err.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>