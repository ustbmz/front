<template>
  <div>
    <div class="fly-home fly-panel" style="background-image: url();">
      <img :src="userinfo.pic" alt="贤心" />
      <i class="iconfont icon-renzheng" title="Imooc社区认证"></i>
      <h1>
        {{ userinfo.name }}
        <i class="iconfont icon-nan"></i>
        <!-- <i class="iconfont icon-nv"></i>  -->
        <i class="layui-badge fly-badge-vip">{{
          userinfo.isVip === '0' ? '非VIP' : 'VIP' + userinfo.isVip
        }}</i>
        <!--
    <span style="color:#c00;">（管理员）</span>
    <span style="color:#5FB878;">（社区之光）</span>
    <span>（该号已被封）</span>
    -->
      </h1>

      <!-- <p style="padding: 10px 0; color: #5FB878;">认证信息：layui 作者</p> -->

      <p class="fly-home-info">
        <i class="iconfont icon-kiss" title="飞吻"></i
        ><span style="color: #FF7200;">{{ userinfo.favs }} 积分</span>
        <i class="iconfont icon-shijian"></i><span>{{ userinfo.created | moment }}</span>
        <i class="iconfont icon-chengshi"></i><span>来自杭州</span>
      </p>

      <p class="fly-home-sign">{{ userinfo.remark }}</p>

      <div class="fly-sns" data-user="">
        <a
          href="javascript:;"
          class="layui-btn layui-btn-primary fly-imActive"
          data-type="addFriend"
          >加为好友</a
        >
        <a href="javascript:;" class="layui-btn layui-btn-normal fly-imActive" data-type="chat"
          >发起会话</a
        >
      </div>
    </div>

    <div class="layui-container">
      <div class="layui-row layui-col-space15">
        <div class="layui-col-md6 fly-home-jie">
          <div class="fly-panel">
            <h3 class="fly-panel-title">{{ userinfo.name }} 最近的提问</h3>
            <ul class="jie-row">
              <li v-for="(item, index) in postlist" :key="'post' + index">
                <span
                  class="fly-jing"
                  v-for="(item, index) in item.tags"
                  :key="index"
                  :class="item.class"
                  >{{ item.name }}</span
                >
                <a href="" class="jie-title"> {{ item.title }}</a>
                <i>{{ item.created | moment }}</i>
                <em class="layui-hide-xs">{{ item.reads }}阅/{{ item.answer }}答</em>
              </li>

              <div
                v-show="postlist.length === 0"
                class="fly-none"
                style="min-height: 50px; padding:30px 0; height:auto;"
              >
                <i style="font-size:14px;">没有发表任何求解</i>
              </div>
            </ul>
          </div>
        </div>

        <div class="layui-col-md6 fly-home-da">
          <div class="fly-panel">
            <h3 class="fly-panel-title">{{ userinfo.name }} 最近的回答</h3>
            <ul class="home-jieda">
              <li v-for="(item, index) in commentslist" :key="'com' + index">
                <p>
                  <span>{{ item.created | moment }}</span>
                  在<a href="" target="_blank">{{ item.tid.title }}</a
                  >中回答：
                </p>
                <div class="home-dacontent">
                  {{ item.content }}
                </div>
              </li>

              <div
                v-show="commentslist.length === 0"
                class="fly-none"
                style="min-height: 50px; padding:30px 0; height:auto;"
              >
                <span>没有回答任何问题</span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo, getPostList, getCommentsList } from '@/api/user'
export default {
  name: 'user-home',
  props: ['uid'],
  data() {
    return {
      userinfo: {},
      postlist: [],
      commentslist: [],
    }
  },
  mounted() {
    this._getUserInfo()
    this._getPostList()
    this._getCommentsList()
  },
  methods: {
    _getUserInfo() {
      getUserInfo({
        uid: this.uid,
      }).then(res => {
        this.userinfo = res.data
      })
    },
    _getPostList() {
      getPostList({
        uid: this.uid,
      }).then(res => {
        this.postlist = res.data
      })
    },
    _getCommentsList() {
      getCommentsList({
        uid: this.uid,
      }).then(res => {
        this.commentslist = res.data
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
