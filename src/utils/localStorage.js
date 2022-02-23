const USER_DETAILS = 'user_details'

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
}

const instance = new LocalStorage()

export default instance
