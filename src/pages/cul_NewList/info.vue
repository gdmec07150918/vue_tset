<template>
  <div>
    <x-header :left-options="{backText: '返回'}" :right-options="{showMore: true}" :title="info.Title" @on-click-more="showMenus = true"></x-header>
    <div class="info">
    <!-- <h1>{{info.Title}}</h1> -->
      <p class="cont">{{info.Artcont}}</p>
      <p class="article_time">{{info.AddTime}}</p>
    </div>
    <div>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel @on-click-menu="actionsheet($event)"></actionsheet>
    </div>
  </div>
</template>

<script>
import { XHeader,Actionsheet } from 'vux'
export default {
  name: 'info',
  components: {
    XHeader,
    Actionsheet
  },
  data: function(){
    return{
      info: [],
      showmore: true,
      showMenus: false,
      menus: [{
          label: 'Primary333',
          type: 'primary',
          value: 'primaryddd',
          otherProp: 'hey'
        }, {
          label: 'Warn',
          type: 'warn'
        }, {
          label: 'Disabled',
          type: 'disabled'
        }, {
          label: 'Default'
        }]
    }
  },
  methods:{
    actionsheet: function(e){
      console.log(e)
    }
  },
  beforeCreate:function(){
      console.log('beforeCreate:刚刚new Vue()之后，这个时候，数据还没有挂载呢，只是一个空壳')           
      console.log(this.msg)//undefined
      console.log(document.getElementsByClassName("myp")[0])//undefined
  },
  created:function(){
    let col = this.$route.params.col
    let id = this.$route.params.id
    // var that = this
    console.log(this.$route.params)
    this.$axios.get("/api/weixinPHP/Ashx/M_Article.ashx",{
      params: {type:'getac',
      col:id,pid:col}})
    .then(res =>{
      this.info =  res.data.articleInfo;
      console.log(this.info)
    }).catch(error =>{
      console.log(error)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.info{padding: 15px;}
.article_time{text-align: right;color: #000 !important;font-weight: 500;margin: 10px 0;}
h1{text-align: center;font-weight: 700;font-size: 17px;margin: 10px 0;}
</style>
