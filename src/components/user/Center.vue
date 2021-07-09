<template>
  <div class="panel main pd20">
    <div class="msg">Hi , admin 你已经是正式会员</div>
    <div class="layui-row layui-col-space20">
      <div class="layui-col-md6">
        <div class="panel border">
          <div class="title">我的会员信息</div>
          <div class="content">
            <p>积分经验值:{{ user.favs }}</p>
            <p>您当前为:{{ user.isVip === '0' ? '非VIP' : 'VIP' + user.isVip }}</p>
          </div>
        </div>
      </div>
      <div class="layui-col-md6">
        <sign class="border"></sign>
      </div>
      <div class="layui-col-md12">
        <div class="panel border mg20">
          <div class="title">快捷方式</div>
          <div class="content" style="height:auto">
            <ul class="layui-row layui-col-space10">
              <li
                class="layui-col-sm3 layui-col-xs4"
                v-for="(item, index) in lists"
                :key="'item' + index"
              >
                <a href="">
                  <div class="customfont shortcut" :class="item.icon"></div>
                  <span>{{ item.name }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
import Sign from '@/components/sidebar/Sign.vue'
export default {
  name: 'user-center',
  data() {
    return {
      lists: [
        {
          name: '修改密码',
          icon: 'icon-Setting',
        },
        {
          name: '修改密码',
          icon: 'icon-Setting',
        },
        {
          name: '修改密码',
          icon: 'icon-Setting',
        },
        {
          name: '修改密码',
          icon: 'icon-Setting',
        },
        {
          name: '修改密码',
          icon: 'icon-Setting',
        },
        {
          name: '修改密码',
          icon: 'icon-Setting',
        },
        {
          name: '修改密码',
          icon: 'icon-Setting',
        },
        {
          name: '修改密码',
          icon: 'icon-Setting',
        },
        {
          name: '修改密码',
          icon: 'icon-Setting',
        },
        {
          name: '修改密码',
          icon: 'icon-Setting',
        },
        {
          name: '修改密码',
          icon: 'icon-Setting',
        },
        {
          name: '修改密码',
          icon: 'icon-Setting',
        },
      ],
      user: {},
    }
  },
  computed: {},
  mounted() {
    this._getUserInfo()
  },
  methods: {
    _getUserInfo() {
      getUserInfo({
        uid: this.$store.state.userInfo._id,
      }).then(res => {
        if (res.code === 200) {
          this.user = res.data
        }
      })
    },
  },
  components: {
    Sign,
  },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .panel {
    &.main {
      margin: 0 !important;
    }
  }
}
.panel {
  color: #333;
  border-radius: 2px;
  background: #fff;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  &.main {
    margin: 0 0 10px 225px;
  }
}
.msg {
  background: #f5f5f5;
  color: #666;
  margin-bottom: 20px;
  padding: 10px 15px;
}
.pd20 {
  padding: 20px;
}
.border {
  border: 1px solid #e6e6e6;
}
.title {
  height: 50px;
  padding: 0 15px;
  color: #333;
  line-height: 50px;
  border-bottom: 1px dotted #e9e9e9;
  font-size: 14px;
}
.content {
  padding: 18px 15px;
  height: 50px;
  line-height: 26px;
  font-size: 14px;
  color: #666;
}
.mg20 {
  margin-top: -20px;
}

.shortcut {
  background-color: #2f9688;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #e6e6e6;
  border-radius: 2px;
  font-size: 30px;
}

li {
  text-align: center;
  padding: 5px;
}
</style>
