import Qs from 'qs'
import {cookie} from 'vux'
const config = {
  baseURL: '/api/',
  transformRequest: [data => Qs.stringify(data)],
  validateStatus: null,
  headers: {
    Authorization: 'BasicAuth ' + cookie.get('SessionKey')
  }
}
export default config
