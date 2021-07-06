<template>
  <div class="layui-container">
    <panle></panle>
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8 content detail">
        <div class="fly-panel detail-box">
          <h1>{{ page.title }}</h1>
          <div class="fly-detail-info">
            <!-- <span class="layui-badge">审核中</span> -->
            <span class="layui-badge layui-bg-green fly-detail-column">{{
              page.catalog | trasnCatalog
            }}</span>

            <span class="layui-badge" style="background-color: #999;" v-if="page.isEnd === '0'"
              >未结</span
            >
            <span class="layui-badge" style="background-color: #5FB878;" v-else>已结</span>

            <template v-if="page.tags !== {}">
              <span
                class="layui-badge layui-bg-black"
                v-for="(item, index) in page.tags"
                :key="'tag' + index"
                >{{ item.name }}
              </span>
            </template>

            <span class="fly-list-nums">
              <a><i class="iconfont" title="回答">&#xe60c;</i> {{ page.answer }}</a>
              <i class="iconfont" title="人气">&#xe60b;</i> {{ page.reads }}
            </span>
          </div>
          <div class="detail-about">
            <a class="fly-avatar">
              <img class="userpic" :src="page.user ? page.user.pic : ''" />
            </a>
            <div class="fly-detail-user">
              <a href="" class="fly-link">
                <cite>{{ page.user ? page.user.name : '' }}</cite>
                <i class="layui-badge fly-badge-vip">
                  VIP{{ page.user ? page.user.isVip : '0' }}
                </i>
              </a>
              <span>{{ page.created | moment }}</span>
            </div>
            <div class="detail-hits" id="LAY_jieAdmin" data-id="123">
              <span style="padding-right: 10px; color: #FF7200"> 悬赏：{{ page.fav }} 积分 </span>
            </div>
          </div>
          <div class="layui-btn-container fly-detail-admin pt1">
            <a href="" class="layui-btn layui-btn-sm jie-admin">编辑</a>
            <a href="" class="layui-btn layui-btn-sm jie-admin">收藏</a>
          </div>
          <div class="detail-body photos" v-richtext="page.content"></div>
        </div>

        <div class="fly-panel detail-box" id="flyReply">
          <fieldset class="layui-elem-field layui-field-title" style="text-align: center;">
            <legend>回帖</legend>
          </fieldset>

          <ul class="jieda" id="jieda">
            <li
              data-id="111"
              class="jieda-daan"
              v-for="(item, index) in comments"
              :key="'comment' + index"
            >
              <a name="item-1111111111"></a>
              <div class="detail-about detail-about-reply">
                <a class="fly-avatar" href="">
                  <img :src="item.cuid.pic" />
                </a>
                <div class="fly-detail-user">
                  <a href="" class="fly-link">
                    <cite>{{ item.cuid.name }}</cite>
                    <i class="layui-badge fly-badge-vip">{{ item.cuid.isVip }}</i>
                  </a>

                  <span v-if="index === 0">(楼主)</span>
                  <!--
                <span style="color:#5FB878">(管理员)</span>
                <span style="color:#FF9E3F">（社区之光）</span>
                <span style="color:#999">（该号已被封）</span>
                --></div>

                <div class="detail-hits">
                  <span>{{ item.created | moment }}</span>
                </div>

                <i class="iconfont icon-caina" title="最佳答案"></i>
              </div>
              <div class="detail-body jieda-body photos" v-richtext="item.content"></div>
              <div class="jieda-reply">
                <span class="jieda-zan" :class="{ zanok: item.ishand === 0 }" type="zan">
                  <i class="iconfont icon-zan"></i>
                  <em>{{ item.hands }}</em>
                </span>
                <span type="reply">
                  <i class="iconfont icon-svgmoban53"></i>
                  回复
                </span>
                <div class="jieda-admin">
                  <span type="edit">编辑</span>
                  <span type="del">删除</span>
                  <!-- <span class="jieda-accept" type="accept">采纳</span> -->
                </div>
              </div>
            </li>

            <!-- 无数据时 -->
            <li class="fly-none" v-if="comments.length === 0">消灭零回复</li>
          </ul>
          <div class="layui-form layui-form-pane">
            <editor @changeContent="addCommentContent" :lastContent="this.cominfo.content"></editor>
            <div class="layui-form-item pt2">
              <div class="layui-row">
                <label for="L_vercode" class="layui-form-label">
                  验证码
                </label>
                <div class="layui-input-inline">
                  <input
                    type="text"
                    name="code"
                    v-model="code"
                    placeholder="请输入验证码"
                    autocomplete="off"
                    class="layui-input"
                  />
                </div>
                <div class>
                  <span class="svg" style="color: #c00" @click="_getCode()" v-html="svg"></span>
                </div>
              </div>
            </div>
            <div class="layui-form-item btnpd">
              <button type="button" class="layui-btn" @click="submit()">
                提交回复
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-col-md4">
        <hot-list></hot-list>
        <ads></ads>
        <links></links>
      </div>
    </div>
  </div>
</template>

<script>
import { getPostDetail, getComments, addComments } from '@/api/content'
import Panle from '@/components/Panle.vue'
import Editor from '@/components/modules/editor'
import HotList from '@/components/sidebar/HotList.vue'
import Links from '@/components/sidebar/Links.vue'
import Ads from '@/components/sidebar/Ads.vue'
import CodeMix from '@/mixin/code'

export default {
  name: 'detail',
  mixins: [CodeMix],
  data() {
    return {
      tid: '',
      page: {},
      comments: '',
      cominfo: {
        sid: '',
        content: '',
        tid: '',
        code: '',
      },
    }
  },
  components: {
    Panle,
    HotList,
    Links,
    Ads,
    Editor,
  },
  mounted() {
    this.tid = this.$route.params.tid
    this._getPostDetail()
    this._getComments()
  },
  methods: {
    submit() {
      const isLogin = this.$store.state.isLogin
      if (!isLogin) {
        this.$pop('shake', '请先登陆')
        return
      }
      this.cominfo.sid = this.$store.state.sid
      this.cominfo.tid = this.tid
      this.cominfo.code = this.code
      addComments(this.cominfo).then(res => {
        if (res.code === 200) {
          this.$pop('', '评论成功')
          this.cominfo.content = ''
          this.code = ''
          const user = this.$store.state.userInfo
          res.cuid = {
            _id: user._id,
            name: user.name,
            pic: user.pic,
            isVip: user.isVip,
          }
          this.comments.push(res.data)
        } else {
          this.$alert(res.msg)
        }
      })
    },
    addCommentContent(val) {
      this.cominfo.content = val
    },
    _getPostDetail() {
      getPostDetail(this.tid).then(res => {
        if (res.code === 200) {
          this.page = res.data
        }
      })
    },
    _getComments() {
      getComments(this.tid).then(res => {
        if (res.code === 200) {
          this.comments = res.data
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.fly-detail-admin {
  text-align: right;
  background: #f8f8f8;
  border-top: 1px dotted #eeeeee;
}
.fly-detail-info {
  span {
    margin-right: 5px;
  }
}
.btnpd {
  margin-top: -14px;
}
.userpic {
  width: 40px;
  height: 40px;
}
</style>
