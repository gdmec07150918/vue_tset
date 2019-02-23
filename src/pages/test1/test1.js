// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import qs from 'qs'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
// import VueResource from 'vue-resource'
import { AlertPlugin, ToastPlugin } from 'vux'
import axios from 'axios'
import FastClick from 'fastclick'
import {Group, Cell} from 'vux'

// Vue.use(axios)
// 
// Vue.use(axios)
Vue.prototype.$axios = axios
// Vue.use(VueResource )
Vue.use(VueRouter)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
// Vue.use(axios);
// Vue.prototype.axios = axios;
// Vue.prototype.$http = axios

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')