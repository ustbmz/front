<template>
  <div class="fly-panel" style="margin-bottom: 0">
    <ul class="fly-list">
      <li v-for="(item, index) in items" :key="'listitems' + index">
        <a class="fly-avatar">
          <img :src="item.uid.pic" alt="贤心" />
        </a>
        <h2>
          <a class="layui-badge">{{ item.catalog }}</a>
          <router-link :to="{ name: 'detail', params: { tid: item._id } }">{{
            item.title
          }}</router-link>
        </h2>
        <div class="fly-list-info">
          <router-link :to="{name:'home',params:{uid:item.uid._id}}">
            <cite>{{ item.uid.name }}</cite>
            <!-- <i class="iconfont icon-renzheng" title="认证信息：XXX"></i> -->
            <i class="layui-badge fly-badge-vip" v-if="item.uid.isVip == '1'">
              VIP{{item.uid.isVip}}
            </i>
          </router-link>
          <span>{{ item.created | moment }}</span>

          <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻">
            <i class="iconfont icon-kiss"></i>
            {{ item.fav }}
          </span>
          <span v-show="item.status !== '0'" class="layui-badge fly-badge-accept layui-hide-xs">
            已结
          </span>
          <span class="fly-list-nums">
            <i class="iconfont icon-pinglun1" title="回答"></i>
            {{ item.answer }}
          </span>
        </div>
        <div class="fly-list-badge" v-show="item.tags.length > 0 && item.tags[0].name !== ''">
          <span
            class="layui-badge"
            v-for="(tag, index) in item.tags"
            :key="'tag' + index"
            :class="tag.class"
          >
            {{ tag.name }}
          </span>
        </div>
      </li>
    </ul>
    <div style="text-align: center" v-show="isShow">
      <div class="laypage-main" v-if="!isEnd">
        <a href="jie/index.html" class="laypage-next" @click="more()">
          更多求解
        </a>
      </div>
      <div class="nomore gray" v-else>没有更多了</div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'listitem',
  props: {
    lists: {
      default: () => [],
      type: Array,
    },
    isShow: {
      default: false,
      type: Boolean,
    },
    isEnd: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    items() {
      _.map(this.lists, item => {
        switch (item.catalog) {
          case 'ask':
            item.catalog = '提问'
            break
          case 'share':
            item.catalog = '分享'
            break
          case 'discuss':
            item.catalog = '讨论'
            break
          case 'advise':
            item.catalog = '建议'
            break
          case 'notice':
            item.catalog = '公告'
            break
          default:
            item.catalog = '未知'
            break
        }
      })
      return this.lists
    },
  },
  methods: {
    more() {
      this.$emit('nextpage')
    },
  },
}
</script>

<style lang="scss" scoped>
.nomore {
  margin: 10px;
  padding: 20px 0;
}
</style>
