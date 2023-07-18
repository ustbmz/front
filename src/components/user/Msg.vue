<template>
  <div class="fly-panel fly-panel-user" pad20>
    <div class="layui-tab layui-tab-brief" lay-filter="user" id="LAY_msg" style="margin-top: 15px;">
      <button class="layui-btn layui-btn-danger" @click="_readAllMsg()">清空全部消息</button>
      <div id="LAY_minemsg" style="margin-top: 10px;">
        <!--<div class="fly-none">您暂时没有最新消息</div>-->
        <ul class="mine-msg">
          <li data-id="123" v-for="(item, index) in list" :key="index">
            <blockquote class="layui-elem-quote">
              <a href="" target="_blank">
                <cite>{{ item.cuid.name }}</cite>
              </a>
              回复了您的帖子
              <a target="_blank" href="">
                <cite
                  >{{ item.tid.title }} <br />
                  {{ item.content }}</cite
                >
              </a>
            </blockquote>
            <p>
              <span>{{ item.created | moment }}</span>
              <a
                href="javascript:;"
                class="layui-btn layui-btn-small layui-btn-danger fly-delete"
                @click="_readOneMsg(item)"
              >
                删除
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getMsg, readAllMsg, readOneMsg } from '@/api/user'
export default {
  name: 'user-msg',
  data() {
    return {
      list: [],
    }
  },
  mounted() {
    this._getMsgList()
  },
  methods: {
    _getMsgList() {
      getMsg().then(res => {
        if (res.code === 200) {
          this.list = res.data
          console.log(this.list)
        }
      })
    },
    _readAllMsg() {
      this.$confirm(
        '是否全部已读?',
        () => {
          readAllMsg().then(res => {
            if (res.code === 200) {
              this.$pop('', '全部已读')
            }
          })
        },
        () => {}
      )
    },
    _readOneMsg(item) {
      this.$confirm(
        '确认删除?',
        () => {
          readOneMsg({
            id: item._id,
          }).then(res => {
            if (res.code === 200) {
              this.list.splice(this.list.indexOf(item),1)
              this.$pop('', '消息已读')
            }
          })
        },
        () => {}
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  font-size: 20px;
  color: #333;
  align-items: center;
  justify-content: center;
}
</style>
