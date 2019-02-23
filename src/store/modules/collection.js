
import axios from 'axios'
const state={
  collects:[],  //初始化一个colects数组
  newdata: {}
}
const getters={
  renderCollects(state){ //承载变化的collects
    return state.collects;
  },
  readdata(state){
    return state.newdata;
  }
}
const mutations={
  pushCollects(state,items){ //如何变化collects,插入items
    state.collects.push(items)
  },
  getdata(){
    axios.get("/api/weixinPHP/Ashx/View.ashx",{
      params: {type:'members'}})
    .then(res=>{
      state.newdata = res.data.UserInfo
    })
  }
}
const actions={
  invokePushItems(context,item){ //触发mutations里面的pushCollects ,传入数据形参item 对应到items
    context.commit('pushCollects',item);
  },
  getNewData(context){
    context.commit('getdata')
  }
};
export default {
  namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}