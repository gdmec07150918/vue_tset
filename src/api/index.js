import axios from 'axios'
import config from './config'
import url from './url'
const Vaxios = axios.create(config)
Vaxios.interceptors.response.use(res => {
  let data = res.data
  res.data = data.grtCourse
  return res
})
const api = {
  Userinfo: () => Vaxios.get(url.Info)
}
export default {
  install (Vue) {
    Vue.prototype.$axios = api
    Vue.axios = api
  },
  $axios: api
}
export const $axios = api
