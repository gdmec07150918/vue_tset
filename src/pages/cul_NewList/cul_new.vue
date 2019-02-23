<template>
  <div id=app1>
  <!-- <img src="../../assets/logo.png"> -->
    <group>
      <panel type="5" :list="article" @on-click-item="linkinfo($event)">
      </panel>
    </group>
    <router-view/>
    </div>
</template>
<script>
import {Group, Panel, Cell, XInput,XAddress,ChinaAddressV4Data,XTextarea} from 'vux'
export default {
  name: 'cul_new',
  components: {
    Group,
    Panel,
    Cell,
    XInput,
    XAddress,
    XTextarea
  },
  data: function () {
    return {
      list: [],
      article: [],
      footer: {
        title: '1',
        url: 'http://vux.li'
      }
    }
    
  },
  //生命周期函数
  methods:{
        destroy:function(){
            this.$destroy()//
        },
    linkinfo: function(e){
      let id = e.no
      console.log(id)
      this.$router.push({
        name: 'info',
        params: {
          col: 1,
          id: id
        }
      })
    }
  },
  beforeCreate:function(){
      console.log('beforeCreate:刚刚new Vue()之后，这个时候，数据还没有挂载呢，只是一个空壳')           
      console.log(this.msg)//undefined
      console.log(document.getElementsByClassName("myp")[0])//undefined
  },
  created:function(){
    var that = this
    this.$axios.get("/api/weixinPHP/Ashx/ArticleJSON.ashx",{
      params: {type:'getlist',
      col:1,pid:1,psize:1}})
    .then(res =>{
      this.list = res.data.Rows
      for(let i in res.data.Rows){
       this.article.push({
          title:res.data.Rows[i].Title,
          desc:res.data.Rows[i].Artcont,
          src: '/api/' + res.data.Rows[i].Logoimg,
          no: res.data.Rows[i].ID
        })
      }
    console.log(this.list)
    }).catch(error =>{
      console.log(error)
    })

      console.log('created:这个时候已经可以使用到数据，也可以更改数据,在这里更改数据不会触发updated函数')
      this.msg+='!!!'
      console.log('在这里可以在渲染前倒数第二次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取')
      console.log('接下来开始找实例或者组件对应的模板，编译模板为虚拟dom放入到render函数中准备渲染')
  },
  beforeMount:function(){
      console.log('beforeMount：虚拟dom已经创建完成，马上就要渲染,在这里也可以更改数据，不会触发updated')
      this.msg+='@@@@'
      console.log('在这里可以在渲染前最后一次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取')
      console.log(document.getElementsByClassName("myp")[0])//undefined
      console.log('接下来开始render，渲染出真实dom')
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
  },
  beforeUpdate:function(){
      //这里不能更改数据，否则会陷入死循环
      console.log('beforeUpdate:重新渲染之前触发')
      console.log('然后vue的虚拟dom机制会重新构建虚拟dom与上一次的虚拟dom树利用diff算法进行对比之后重新渲染')         
  },
  updated:function(){
      //这里不能更改数据，否则会陷入死循环
      console.log('updated:数据已经更改完成，dom也重新render完成')
  },
  beforeDestroy:function(){
      console.log('beforeDestory:销毁前执行（$destroy方法被调用的时候就会执行）,一般在这里善后:清除计时器、清除非指令绑定的事件等等...')
      // clearInterval(this.$options.timer)
  },
  destroyed:function(){
      console.log('destroyed:组件的数据绑定、监听...都去掉了,只剩下dom空壳，这里也可以善后')
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
  /*color: #333;*/
}
.weui-media-box__hd{width: 90px !important;height: 70px !important;}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
