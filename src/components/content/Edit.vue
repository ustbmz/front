<template>
  <div class="layui-container fly-marginTop" :class="{ 'd-hide': isHide }">
    <div class="fly-panel" pad20 style="padding-top: 5px">
      <!--<div class="fly-none">没有权限</div>-->
      <div class="layui-form layui-form-pane">
        <div class="layui-tab layui-tab-brief" lay-filter="user">
          <ul class="layui-tab-title">
            <li class="layui-this">
              编辑帖子
              <!-- 编辑帖子 -->
            </li>
          </ul>
          <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0">
            <div class="layui-tab-item layui-show">
              <div class="layui-row layui-col-space15 layui-form-item">
                <!-- <div class="layui-col-md3">
                  <label class="layui-form-label">所在专栏</label>
                  <div
                    class="layui-input-block"
                    @click="
                      () => {
                        this.isSelect = !this.isSelect
                      }
                    "
                  >
                    <div
                      class="layui-unselect layui-form-select"
                      :class="{ 'layui-form-selected': isSelect }"
                    >
                      <div class="layui-select-title">
                        <input
                          type="text"
                          placeholder="请选择"
                          readonly
                          v-model="catalog"
                          class="layui-input layui-unselect layui-disabled"
                        />
                      </div>
                    </div>
                  </div>
                </div> -->
                <div class="layui-col-md9">
                  <label for="L_title" class="layui-form-label">标题</label>
                  <div class="layui-input-block">
                    <input type="text" v-model="title" class="layui-input" />
                  </div>
                </div>
              </div>
              <editor @changeContent="changeContent" :lastContent="content"></editor>
              <div class="layui-form-item">
                <div class="layui-inline">
                  <label class="layui-form-label">悬赏飞吻</label>
                  <div
                    class="layui-input-block"
                    @click="
                      () => {
                        this.isSelect_fav = !this.isSelect_fav
                      }
                    "
                  >
                    <div
                      class="layui-unselect layui-form-select"
                      :class="{ 'layui-form-selected': isSelect_fav }"
                    >
                      <div class="layui-select-title">
                        <input
                          type="text"
                          placeholder="请选择"
                          readonly
                          v-model="favs[favIndex]"
                          class="layui-input layui-unselect layui-disabled"
                        />
                      </div>
                      <div class="layui-form-mid layui-word-aux">发表后无法更改飞吻</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="layui-form-item">
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
              <div class="layui-form-item">
                <button class="layui-btn" @click="submit()">
                  立即发布
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updatePost } from '@/api/content'
import Editor from '@/components/modules/editor'
import CodeMix from '@/mixin/code'
export default {
  name: 'add',
  mixins: [CodeMix],
  props: ['tid', 'page'],
  components: {
    Editor,
  },
  data() {
    return {
      isSelect: false,
      isSelect_fav: false,
      cataIndex: 0,
      favIndex: 0,
      catalogs: [
        {
          text: '请选择',
          value: '',
        },
        {
          text: '提问',
          value: 'ask',
        },
        {
          text: '讨论',
          value: 'discuss',
        },
        {
          text: '分享',
          value: 'share',
        },
        {
          text: '建议',
          value: 'advise',
        },
      ],
      favs: [10, 20, 30, 50, 60, 80],
      content: '',
      catalog: '',
      title: '',
    }
  },
  mounted() {
    if (this.page) {
      this.title = this.page.title
      this.content = this.page.content
      this.favIndex = this.favs.indexOf(parseInt(this.page.fav))
      this.catalog = this.page.catalog
      // this.cataIndex =parseInt(this.index)
      localStorage.setItem('editData', JSON.stringify(this.page))
    } else {
      // 用户可能刷新了页面
      const lastData = JSON.parse(localStorage.getItem('editData'))
      if (lastData && lastData.title !== '') {
        this.$confirm(
          '是否加载上次未完成的数据',
          () => {
            (this.title = lastData.title),
              (this.cataIndex = parseInt(lastData.cataIndex)),
              (this.favIndex = parseInt(lastData.favIndex)),
              (this.content = lastData.content)
          },
          () => {
            localStorage.removeItem('addData')
          }
        )
      }
    }
  },
  computed: {
    isHide() {
      return this.$store.state.isHide
    },
  },
  methods: {
    changeCatelog(item, index) {
      this.cataIndex = index
    },
    changeFav(item, index) {
      this.favIndex = index
    },
    changeContent(val) {
      this.content = val
      const obj = {
        title: this.title,
        cataIndex: this.cataIndex,
        favIndex: this.favIndex,
        content: this.content,
      }
      localStorage.setItem('addData', JSON.stringify(obj))
    },
    submit() {
      updatePost({
        tid: this.tid,
        title: this.title,
        code: this.code,
        catalog: this.catalog,
        fav: this.favs[this.favIndex],
        content: this.content,
        sid: this.$store.state.sid,
      }).then(res => {
        if (res.code === 200) {
          localStorage.setItem('editData', '')
          this.$alert(res.msg)
          setTimeout(() => {
            this.$router.push({ name: 'detail', params: { tid: this.tid } })
          }, 2000)
        } else {
          this.$alert(res.msg)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
