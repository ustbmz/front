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

            <span class="layui-badge" style="background-color: #999;" v-if="page.isEnd === '0'">
              未结
            </span>
            <span class="layui-badge" style="background-color: #5FB878;" v-else>已结</span>

            <template v-if="page.tags !== []">
              <span
                class="layui-badge layui-bg-black"
                v-for="(temp, index) in page.tags"
                :key="'tag' + index"
                >{{ temp.name }}
              </span>
            </template>

            <span class="fly-list-nums">
              <a><i class="iconfont" title="回答">&#xe60c;</i> {{ page.answer }}</a>
              <i class="iconfont" title="人气">&#xe60b;</i> {{ page.reads }}
            </span>
          </div>
          <div class="detail-about">
            <a class="fly-avatar">
              <img class="userpic" :src="page.user ? page.user.pic : '/public/img/user.jpeg'" />
            </a>
            <div class="fly-detail-user">
              <a href="" class="fly-link">
                <cite>{{ page.user ? page.user.name : '' }}</cite>
                <i class="layui-badge fly-badge-vip ml1">
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
            <router-link
              :to="{ name: 'edit', params: { tid: tid, page: page } }"
              class="layui-btn layui-btn-sm jie-admin"
              v-show="page.isEnd === '0'"
              >编辑</router-link
            >
            <a
              href=""
              :class="{ 'layui-disabled': page.isFav }"
              class="layui-btn layui-btn-sm jie-admin"
              @click.prevent="addCollect()"
              >{{ page.isFav ? '取消收藏' : '收藏' }}</a
            >
          </div>
          <div class="detail-body photos" v-html="escapeHtmlStr"></div>
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
                  <router-link :to="{name:'home',params:{uid:item.cuid._id}}" class="fly-link">
                    <cite>{{ item.cuid.name }}</cite>
                    <i class="layui-badge fly-badge-vip" v-if="item.cuid.isVip !== '0'">
                      VIP{{ item.cuid.isVip }}</i
                    >
                  </router-link>

                  <span v-if="index === 0">(楼主)</span>
                  <!--
                <span style="color:#5FB878">(管理员)</span>
                <span style="color:#FF9E3F">（社区之光）</span>
                <span style="color:#999">（该号已被封）</span>
                --></div>

                <div class="detail-hits">
                  <span>{{ item.created | moment }}</span>
                </div>

                <i class="iconfont icon-caina" title="最佳答案" v-if="item.isBest === '1'"></i>
              </div>
              <div class="detail-body jieda-body photos" v-richtext="item.content"></div>
              <div class="jieda-reply">
                <span
                  class="jieda-zan"
                  :class="{ zanok: item.ishand === 1 }"
                  type="zan"
                  @click="clickZan(item)"
                >
                  <i class="iconfont icon-zan"></i>
                  <em>{{ item.hands }}</em>
                </span>
                <span type="reply">
                  <i class="iconfont icon-svgmoban53"></i>
                  回复
                </span>
                <div class="jieda-admin">
                  <span
                    type="edit"
                    v-show="user._id === item.cuid._id && page.isEnd !== '1'"
                    @click="editComment(item)"
                    >编辑</span
                  >
                  <!-- <span type="del">删除</span> -->
                  <span
                    type="accept"
                    v-show="user._id === page.user._id && page.isEnd !== '1'"
                    @click="confirmBest(item)"
                    class="jieda-accept"
                    >采纳</span
                  >
                </div>
              </div>
            </li>

            <!-- 无数据时 -->
            <li class="fly-none" v-if="comments.length === 0">消灭零回复</li>
          </ul>
          <div class="layui-form layui-form-pane" v-show="page.isEnd === '0'">
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
import { getPostDetail } from '@/api/content'
import { getComments, addComments, editComment, bestComment, addHand } from '@/api/comments'
import { userCollect,removeCollect } from '@/api/user'
import Panle from '@/components/Panle.vue'
import Editor from '@/components/modules/editor'
import HotList from '@/components/sidebar/HotList.vue'
import Links from '@/components/sidebar/Links.vue'
import Ads from '@/components/sidebar/Ads.vue'
import CodeMix from '@/mixin/code'
import escapeHtml from '@/utils/escapeHtml'
import { ScrollToElem } from '@/utils/common'

export default {
  name: 'detail',
  mixins: [CodeMix],
  data() {
    return {
      page: {},
      comments: '',
      cominfo: {
        cid: '',
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
    // window.vue = ScrollToElem
    this._getPostDetail()
    this._getComments()
  },
  methods: {
    clickZan(item) {
      console.log('🚀 ~ file: Detail.vue ~ line 210 ~ clickZan ~ item', item)
      addHand({
        uid: item.cuid._id,
        cid: item._id,
      }).then(res => {
        if (res.code === 200) {
          this.$pop('', '点赞成功')
          item.ishand = 1
          item.hands += 1
        } else {
          this.$pop('shake', res.msg)
        }
      })
    },
    editComment(item) {
      this.cominfo.content = item.content
      // 修改评论内容
      ScrollToElem('.layui-input-block', 1000, -65)
      document.getElementById('edit').focus()
      this.cominfo.cid = item._id
      this.cominfo.item = item
    },
    confirmBest(item) {
      this.$confirm(
        '确认采纳为最佳回答吗？',
        () => {
          // 修改评论isBest为1
          bestComment({
            sid: this.$store.state.sid,
            cid: item._id,
            pid: this.page._id,
          }).then(res => {
            if (res.code === 200) {
              this.$pop('', '采纳成功')
              this.page.isEnd = '1'
              item.isBest = '1'
            }
          })
        },
        () => {}
      )
    },
    submit() {
      const isLogin = this.$store.state.isLogin
      if (!isLogin) {
        this.$pop('shake', '请先登陆')
        return
      }
      this.cominfo.sid = this.$store.state.sid
      this.cominfo.tid = this.tid
      this.cominfo.code = this.code

      if (this.cominfo.cid !== 'undefined' && this.cominfo.cid !== '') {
        editComment({
          sid: this.$store.state.sid,
          code: this.code,
          cid: this.cominfo.cid,
          content: this.cominfo.content,
        }).then(res => {
          if (res.code === 200) {
            const temp = this.cominfo.item
            temp.content = this.cominfo.content
            this.$pop('', '评论更新成功')
            this.cominfo.content = ' '
            this.code = ''
            this.comments.splice(this.comments.indexOf(this.cominfo.item), 1, temp)
            // ScrollToElem('.jieda', 1000, -65)
          }
        })
        return
      }

      addComments(this.cominfo).then(res => {
        if (res.code === 200) {
          this.$pop('', '评论成功')
          this.cominfo.content = ' '
          this.code = ''
          const user = this.$store.state.userInfo
          res.data.cuid = {
            _id: user._id,
            name: user.name,
            pic: user.pic,
            isVip: user.isVip,
          }
          this.comments.push(res.data)
          this._getCode()
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
    addCollect() {
      if (this.page.isFav) {
        removeCollect({
          tid: this.page._id,
          uid: this.$store.state.userInfo._id,
          title: this.page.title,
        }).then(res => {
          if (res.code === 200) {
            this.$pop('', '已取消收藏')
            this.page.isFav = false
          } else {
            this.$pop('shake', res.msg)
          }
        })
      } else {
        userCollect({
          tid: this.page._id,
          uid: this.$store.state.userInfo._id,
          title: this.page.title,
        }).then(res => {
          if (res.code === 200) {
            this.$pop('', '收藏成功')
            this.page.isFav = true
          } else {
            this.$pop('shake', res.msg)
          }
        })
      }
    },
  },
  watch: {
    tid() {
      this._getPostDetail()
      this._getComments()
    },
  },
  computed: {
    tid() {
      return this.$route.params.tid
    },
    user() {
      return this.$store.state.userInfo
    },
    escapeHtmlStr() {
      if (this.page.content === '') {
        return ''
      }
      return escapeHtml(this.page.content)
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
