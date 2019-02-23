<template>
  <div id="app">
    <img src="../../assets/logo.png">
    <!-- <p v-if="isShow">ddd</p> -->
    <div>{{userinfo.nickName}}</div>
    <div>
        <ul>
            <li v-for="(val,index) in arrList" :key="index">
                <h5>{{val.productName}}</h5>
                 <p>{{val.price}}</p>
            </li>
        </ul>
    </div>
    <span class="joinStatus" @click="invokePushItems(item)">加入收藏列</span>
    <router-view/>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  // components:{
  //    conditionFilter
  // },
  name: 'App',
  data () {
    return {
      msg: '',
      item:{
         id:'01',
         productName: '苹果',
         price:'1.6元/斤'
      },
      showfooter: false
    }
  },
  computed: {
    ...mapState({  //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
         isShow:state=>state.footerStatus.showFooter
         //注意这些与上面的区别就是state.footerStatus,//里面定义的showFooter是指footerStatus.js里state的showFooter
      }),
      //footerStatus指的是modules文件夹下的footerStatus.js模块
      ////第一个isShow是我自定义的只要对应template里v-if="isShow"就行，
      ////第二个isShow是对应的footerStatus.js里的getters里的isShow
      ...mapGetters('footerStatus',{ 
         isShow:'isShow'
      }),
      ...mapGetters('collection',{ 
        arrList:'renderCollects',
        userinfo: 'readdata'
      })
  },
  mounted:function() {
  },
  methods:{
      ...mapActions('collection',[ //collection是指modules文件夹下的collection.js
          'invokePushItems'
          //collection.js文件中的actions里的方法，在上面的@click中执行并传入实参
      ]),
      change: function () {
      }
  },
  created:function(){
    // this.$store.dispatch('footerStatus/hideFooter')
    // mapActions('collection',[
    //   'invokePushItems'
    //   ])

    // this.$store.commit('hide');

    // this.$store.dispatch('getNewNum',5)

    this.$store.dispatch('footerStatus/showFooter')
    this.$store.dispatch('collection/getNewData')
    // this.$store.commit('hide')
    // console.log(this.$store.state.showFooter)
    console.log(this.$store.state.footerStatus.showFooter)
    // this.$store.state.collection.newdata.then(res=>{
    //   this.userinfo = res 
    // })
  },

  watch:{
      $route(to,from){
        if(to.name=='book'||to.name=='my'){
           this.$store.dispatch('footerStatus/showFooter') //这里改为'footerStatus/showFooter',
                             
    console.log(this.$store.state.footerStatus.showFooter)                              //意思是指footerStatus.js里actions里的showFooter方法
        }else{
           this.$store.dispatch('footerStatus/hideFooter') //同上注释
    console.log(this.$store.state.footerStatus.showFooter)
        }
      }
  },
  beforeMount:function(){
      console.log('beforeMount：虚拟dom已经创建完成，马上就要渲染,在这里也可以更改数据，不会触发updated')
      this.msg+='@@@@'
      console.log('在这里可以在渲染前最后一次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取')
      console.log(document.getElementsByClassName("myp")[0])//undefined
      console.log('接下来开始render，渲染出真实dom')
  },
  beforeUpdate:function(){
      //这里不能更改数据，否则会陷入死循环
    console.log(this.$store.state.collection.newdata)
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
