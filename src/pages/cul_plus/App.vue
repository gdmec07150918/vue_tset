<template>
  <div id="app">
    <div>
      <group>
        <x-input type="text" title="文章标题" v-model="title"></x-input>
        <x-switch title="是否置顶"></x-switch>
        <x-textarea placeholder="文章内容" :value="cont" :rows="rows"></x-textarea>
        <cell title="">图片上传</cell>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <div class="weui-uploader__input-box"><input type="file" class="weui-uploader__input" accept="image/*" multiple /></div>
          </div>
        </div>
      </group>
    </div>
    <!-- <router-view/> -->
  </div>
</template>
<!-- <i18n>
select address:
  zh-CN: 选择地址
</i18n> -->
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
      console.log('beforeCreate:刚刚new Vue()之后，这个时候，数据还没有挂载呢，只是一个空壳')           
      console.log(this.msg)//undefined
      console.log(document.getElementsByClassName("myp")[0])//undefined
  },
  created:function(){
    var that = this
    this.$axios.get("/api/weixinPHP/Ashx/View.ashx",{params: {type:'members'}})
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

      // this.UserInfo.address = addressArr
      console.log(this.UserInfo.address)

    }).catch(error =>{
      console.log(error)
    })

      console.log('created:这个时候已经可以使用到数据，也可以更改数据,在这里更改数据不会触发updated函数')
      this.msg+='!!!'
      console.log('在这里可以在渲染前倒数第二次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取')
      console.log('接下来开始找实例或者组件对应的模板，编译模板为虚拟dom放入到render函数中准备渲染')
  },
  // render:function(createElement){
  //     console.log('render')
  //     return createElement('div','hahaha')
  // },
  mounted:function(){ 
      console.log('mounted：此时，组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了')
      console.log(document.getElementsByClassName("myp")[0])
      console.log('可以在这里操作真实dom等事情...')

      //    this.$options.timer = setInterval(function () {
      //        console.log('setInterval')
      //         this.msg+='!'  
      //    }.bind(this),500)
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
.weui-uploader__input-box {
    float: left;
    position: relative;
    margin-right: 9px;
    margin-bottom: 9px;
    width: 77px;
    height: 77px;
    border: 1px solid #D9D9D9;
}
.weui-uploader__input-box:before, .weui-uploader__input-box:after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #D9D9D9;
}
.weui-uploader__input-box:before {
    width: 2px;
    height: 39.5px;
}
.weui-uploader__input-box:after {
    width: 39.5px;
    height: 2px;
}
.weui-uploader__input {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
