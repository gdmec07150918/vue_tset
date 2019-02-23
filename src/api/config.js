import Qs from 'qs'
const config = {
  baseURL: '/api/',
  transformRequest: [data => Qs.stringify(data)],
  validateStatus: null
}
export default config
