<template>
  <div class="layui-container fly-marginTop" :class="{ 'd-hide': isHide }">
    <div class="fly-panel" pad20 style="padding-top: 5px">
      <!--<div class="fly-none">没有权限</div>-->
      <div class="layui-form layui-form-pane">
        <div class="layui-tab layui-tab-brief" lay-filter="user">
          <ul class="layui-tab-title">
            <li class="layui-this">
              发表新帖
              <!-- 编辑帖子 -->
            </li>
          </ul>
          <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0">
            <div class="layui-tab-item layui-show">
              <form action="" method="post">
                <div class="layui-row layui-col-space15 layui-form-item">
                  <div class="layui-col-md3">
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
                            v-model="catalogs[cataIndex].text"
                            class="layui-input layui-unselect"
                          />
                        </div>
                        <dl class="layui-anim layui-anim-upbit">
                          <dd
                            v-for="(item, index) in catalogs"
                            :key="'catelog' + index"
                            @click="changeCatelog(item, index)"
                            :class="{ 'layui-this': index === cataIndex }"
                          >
                            {{ item.text }}
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div class="layui-col-md9">
                    <label for="L_title" class="layui-form-label">标题</label>
                    <div class="layui-input-block">
                      <input type="text" v-model="title" class="layui-input" />
                    </div>
                  </div>
                </div>
                <editor @changeContent="changeContent"></editor>
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
                            class="layui-input layui-unselect"
                          />
                        </div>
                        <dl class="layui-anim layui-anim-upbit">
                          <dd
                            v-for="(item, index) in favs"
                            :key="'fav' + index"
                            @click="changeFav(item, index)"
                            :class="{ 'layui-this': index === favIndex }"
                          >
                            {{ item }}
                          </dd>
                        </dl>
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
                  <button class="layui-btn" lay-filter="*" lay-submit>
                    立即发布
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from '@/components/modules/editor'
import CodeMix from '@/mixin/code'
export default {
  name: 'add',
  mixins: [CodeMix],
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
      title: '',
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
    },
  },
}
</script>

<style lang="scss" scoped></style>
