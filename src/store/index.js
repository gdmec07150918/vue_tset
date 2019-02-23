/*
同一状态管理   全局状态管理
https://segmentfault.com/a/1190000015782272
 */

import Vue  from 'vue'
import Vuex from 'vuex'
import footerStatus from './modules/footerStatus.js'
import collection  from './modules/collection.js'
Vue.use(Vuex);
/*
const state = {
  showFooter: true,
  changableNum: 0
}
const getters = {
  isShow(state){
    return state.showFooter
  },
  getChangedNum(){
    return state.changableNum
  }
}
const mutations = {
    show(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.showFooter = true;
    },
    hide(state) {  //同上
        state.showFooter = false;
    },
    newNum(state,sum){ //同上，这里面的参数除了state之外还传了需要增加的值sum
       state.changableNum+=sum;
    }
}
const actions = {
    hideFooter(context) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
        context.commit('hide');
    },
    showFooter(context) {  //同上注释
        context.commit('show');
    },
    getNewNum(context,num){   //同上注释，num为要变化的形参
        context.commit('newNum',num)
     }
};*/
/*export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})*/
export default new Vuex.Store({
  modules:{
    footerStatus,
    collection
  }
})

// export default new Vuex.Store({
//   modules:{
//     footerStatus,
//     collection
//   }
// })