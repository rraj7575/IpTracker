const USER_DETAILS = 'user_details'
const SEARCHED_HISTORY = 'searched_history'

class LocalStorage {
  get userDetails () {
    return window.localStorage.getItem(USER_DETAILS)
  }

  set userDetails (value) {
    window.localStorage.setItem(USER_DETAILS, value)
  }

  get searchedHistory () {
    return window.localStorage.getItem(SEARCHED_HISTORY)
  }

  set searchedHistory (value) {
    window.localStorage.setItem(SEARCHED_HISTORY, value)
  }

  clear () {
    localStorage.removeItem(USER_DETAILS);
  }
}

const instance = new LocalStorage()

export default instance
