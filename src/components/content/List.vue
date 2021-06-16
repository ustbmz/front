<template>
  <div class="fly-panel">
    <div class="fly-panel-title fly-filter">
      <a
        @click.prevent="search()"
        :class="{ 'layui-this': status === '' && tag == '' }"
      >
        综合
      </a>
      <span class="fly-mid"></span>
      <a @click.prevent="search(0)" :class="{ 'layui-this': status === '0' }">
        未结
      </a>
      <span class="fly-mid"></span>
      <a @click.prevent="search(1)" :class="{ 'layui-this': status === '1' }">
        已结
      </a>
      <span class="fly-mid"></span>
      <a
        @click.prevent="search(2)"
        :class="{ 'layui-this': status === '' && tag == '精华' }"
      >
        精华
      </a>
      <span class="fly-filter-right layui-hide-xs">
        <a
          @click.prevent="search(3)"
          :class="{ 'layui-this': sort === 'created' }"
        >
          按最新
        </a>
        <span class="fly-mid"></span>
        <a
          @click.prevent="search(4)"
          :class="{ 'layui-this': sort === 'answer' }"
        >
          按热议
        </a>
      </span>
    </div>
    <list-item
      :lists="lists"
      @nextpage="nextPage()"
      :isShow="true"
      :isEnd="isEnd"
    ></list-item>
  </div>
</template>

<script>
import { getList } from "@/api/content";
import ListItem from "./Listitem.vue";
export default {
  name: "list",
  components: {
    ListItem,
  },
  data() {
    return {
      catalog: "",
      isEnd: false,
      current: "",
      status: "",
      tag: "",
      sort: "",
      page: 0,
      limit: 20,
      lists: [
        {
          uid: {
            name: "测试用户",
            isVip: 1,
          },
          title: "大前端课程",
          content: "",
          created: "2020-20-20",
          fav: 40,
          reads: 10,
          catelog: "ask",
          isEnd: 0,
          answer: "0",
          status: 0,
          sort: 0,
          isTop: 0,
          tags: [
            {
              name: "精华",
              class: "layui-bg-red",
            },
            {
              name: "热门",
              class: "layui-bg-blue",
            },
          ],
        },
        {
          uid: {
            name: "测试用户",
            isVip: 1,
          },
          title: "大前端课程",
          content: "",
          created: "2020-20-20",
          fav: 40,
          reads: 10,
          catelog: "ask",
          isEnd: 0,
          answer: "0",
          status: 0,
          sort: 0,
          isTop: 0,
          tags: [
            {
              name: "精华",
              class: "layui-bg-red",
            },
            {
              name: "热门",
              class: "layui-bg-blue",
            },
          ],
        },
      ],
    };
  },
  watch: {
    current(newval, oldval) {
      console.log("current : " + oldval + "," + newval);
      this.init();
    },
    $route(newval, oldval) {
      console.log("🚀 ~ file: List.vue ~ line 131 ~ $router ~ oldval", oldval);
      console.log("🚀 ~ file: List.vue ~ line 131 ~ $router ~ newval", newval);
      this.init(newval);
    },
  },
  mounted() {
    // this._getList();
  },
  methods: {
    init(newval) {
      if (newval) {
        let catalog = newval.params["catalog"];
        if (typeof catalog !== "undefined" && catalog !== "") {
          this.catalog = catalog;
        }
      }
      this.lists = [];
      this.isEnd = false;
      this._getList();
    },
    _getList() {
      console.log("get page list data");
      let options = {
        catalog: this.catalog,
        isTop: 0,
        page: this.page,
        limit: this.limit,
        sort: this.sort,
        tag: this.tag,
        status: this.status,
      };
      getList(options)
        .then((res) => {
          console.log(res);
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
    nextPage() {
      this.page++;
      this._getList();
    },
    search(val) {
      if (typeof val === "undefined" && this.current === "") return;
      else {
        this.current = val;
      }
      console.log("search:" + val);
      switch (val) {
        case 0:
          (this.status = "0"), (this.tag = "");
          break;
        case 1:
          (this.status = "1"), (this.tag = "");
          break;
        case 2:
          (this.status = ""), (this.tag = "精华");
          break;
        case 3:
          this.sort = "created";
          break;
        case 4:
          this.sort = "answer";
          break;
        default:
          (this.status = ""),
            (this.tag = ""),
            (this.sort = "created"),
            (this.current = "");
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>