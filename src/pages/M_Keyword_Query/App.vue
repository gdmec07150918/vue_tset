<template>
  <div id="app">
    <!-- 顶部搜索框 -->
    <div class="jl-search-box weui-cell">
      <div class="weui-cell__hd"><x-icon type="ios-arrow-left" size="30" class="icon-red"></x-icon></div>
      <div class="weui-cell__bd"><x-input></x-input></div>
      <div class="weui-cell__ft">搜索</div>
    </div>
    <div class=weui-cell>
      <div class="weui-cell__bd">历史搜索</div>
      <div class="weui-cell__ft"><img src="../../assets/images/clean.svg"></div>
    </div>
  </div>
</template>
<script>
import {Group, Cell, XInput,XSwitch,,XTextarea} from 'vux'
export default {
  name: 'App',
  components: {
    Group,
    Cell,
    XInput,
    XSwitch,
    XTextarea
  },
  data: function () {
    return {
      rows: 5,
      title: '',
      ontop: false,
      cont: '',
      artcle_img:'',
      himg : 'dd',
      rawvalue: true,
      UserInfo: [],
      value: ['广东省', '广州市', '番禺区'],
      adrconts: ''
    }
    
  },
  //生命周期函数
  methods:{
    destroy:function(){
      this.$destroy()//
    }
  },

  form: {type:'members'},
  beforeCreate:function(){
  },
  created:function(){
    var that = this
    //{params: {m:'members'}}
    this.$axios.get("/api/ASHX/FHomeServer.ashx?m=getSearchCondition&prop=1&propType=2")
    .then(res =>{
      this.UserInfo = res.data.UserInfo
      this.UserInfo.headImgUrl = '/api/' + res.data.UserInfo.headImgUrl
      let addressArr = res.data.UserInfo.address.split(' ')
      this.UserInfo.address = []
      if(addressArr.length > 0){
        //adrconts
        for(let arr = 0;arr < addressArr.length;arr++){
          if(arr < 3){
            console.log(addressArr[arr])
            this.UserInfo.address.push(addressArr[arr])
          }else {
            this.adrconts += addressArr[arr]
          }
        }
      }
      console.log(this.UserInfo.address)
    }).catch(error =>{
      console.log(error)
    })
  },
  mounted:function(){ 
  }
}
</script>

<style>
*, a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video{
  padding: 0;
  margin:0;
  border: 0;
  font: inherit;
  font-size: .9375rem;
  color: #333;
}
.jl-search-box{background-color: #000;}
.vux-x-icon {
  fill: #fff;
}
.cell-x-icon {
  display: block;
  fill: green;
}
.weui-cell {padding: 10px 15px;position: relative;display: -webkit-box;display: -webkit-flex;display: flex;-webkit-box-align: center;-webkit-align-items: center;align-items: center;}
.weui-cell__bd {-webkit-box-flex: 1;-webkit-flex: 1;flex: 1;}
.weui-cell__ft {text-align: right;color: #808080;}

.jl-search-box.weui-cell{padding: 10px;}
.jl-search-box.weui-cell>.weui-cell__bd{margin: 0 10px;}
.jl-search-box .weui-cell__ft{color:#fff;}
.jl-search-box .vux-x-input.weui-cell{padding: 6px 10px;background-color: #fff;}
</style>
