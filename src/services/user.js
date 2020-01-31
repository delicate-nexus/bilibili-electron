import axios from 'axios'

export default {
  getLoginUrl() {
    return axios
      .get('https://passport.bilibili.com/qrcode/getLoginUrl')
      .then(({ data }) => data)
  }
}
