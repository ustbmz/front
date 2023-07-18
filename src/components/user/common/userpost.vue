<template>
  <div class="overflow">
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
      <tbody class="layui-tbody">
        <tr v-for="(item, index) in list" :key="'post' + index">
          <td class="text-left">
            <router-link :to="{ name: 'detail', params: { tid: item._id } }" class="link">{{
              item.title
            }}</router-link>
          </td>
          <td>{{ item.status === '0' ? '正常' : '异常' }}</td>
          <td :class="{'layui-success':item.isEnd === '1'}">{{ item.isEnd === '0' ? '未结帖' : '结帖' }}</td>
          <td>{{ item.created | moment }}</td>
          <td>{{ item.reads }}阅/{{ item.answer }}答</td>
          <td class="minwidth">
            <div
              :class="{ 'layui-btn-disabled': item.isEnd === '1' }"
              class="layui-btn layui-btn-xs"
              @click="editPost(item)"
            >
              编辑
            </div>
            <div class="layui-btn layui-btn-xs layui-btn-danger">删除</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getPostListByUid } from '@/api/user'
export default {
  name: 'user-post',
  data() {
    return {
      uid: '',
      list: [],
    }
  },
  mounted() {
    this.uid = this.$store.state.userInfo._id
    this.getList()
  },
  methods: {
    editPost(item) {
      if (item.isEnd === '1') {
        this.$pop('shake', '已结帖，不能再编辑了哦~')
        return
      } else {
        this.$router.push({ name: 'edit', params: { tid: item._id, page: item } })
      }
    },
    getList() {
      getPostListByUid({
        uid: this.uid,
      }).then(res => {
        if (res.code === 200) {
          this.list = res.data
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.overflow {
  overflow-y: auto;
}
.minwidth {
  min-width: 100px;
}
.layui-tbody {
  text-align: center;
  &:first-child {
    text-align: left;
  }
}
.link {
  color: #0460ac;
}
.white {
  color: white;
}
.layui-success{
  color: #257e02;
}
</style>
