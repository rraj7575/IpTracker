const USER_DETAILS = 'user_details'
const KEY_AUTH_TOKEN = 'auth_token'
const KEY_TOKEN_EXPIRY = 'token_expiry'
const KEY_CUR_CIRCLE = 'cur_circle';

class LocalStorage {
  get userDetails () {
    return window.localStorage.getItem(USER_DETAILS)
  }

  set userDetails (value) {
    window.localStorage.setItem(USER_DETAILS, value)
  }

  clear () {
    window.localStorage.clear()
  }

  isLoggedIn () {
    return (Boolean(this.olmId) &&
      Boolean(this.authToken) &&
      Boolean(this.tokenExpiry))
  }

  isSessionValid () {
    return (this.isLoggedIn() &&
      this.tokenExpiry.getTime() > new Date().getTime())
  }
}

const instance = new LocalStorage()

export default instance
