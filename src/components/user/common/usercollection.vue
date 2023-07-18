<template>
  <div>
    <table class="layui-table text-center">
      <thead>
        <tr class="text-center">
          <td>
            <div class="layui-table-cell pl0">帖子标题</div>
          </td>
          <td>
            <div class="layui-table-cell pl0">收藏时间</div>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in list" :key="'post'+index">
          <td><router-link class="link" :to="{name:'detail',params:{tid:item.tid}}">{{item.title}}</router-link></td>
          <td>{{item.created | moment}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {getUserCollect} from '@/api/user'
export default {
  name: 'user-collections',
  data () {
    return {
      list:[]
    }
  },
  mounted () {
    this._getUserCollect()
  },
  methods: {
    _getUserCollect(){
      getUserCollect({
        uid:this.$store.state.userInfo._id
      }).then((res)=>{
        if(res.code === 200){
          this.list = res.data
        }else{
          this.$pop('shake',res.msg)
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.link{
  color: #0662ca;
}
</style>