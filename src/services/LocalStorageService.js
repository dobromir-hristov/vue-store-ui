/* Fake local storage service. Used on devices that do not allow LocalStorage usage */

export const fakeLocalStorage = {
  _data: {},
  setItem: function (id, val) { this._data[id] = String(val) },
  getItem: function (id) { return this._data.hasOwnProperty(id) ? this._data[id] : undefined },
  removeItem: function (id) { return delete this._data[id] },
  clear: function () { this._data = {} }
}

export function isLocalStorageAvailable () {
  const mod = 'localstorage_test'
  try {
    window.localStorage.setItem(mod, mod)
    window.localStorage.removeItem(mod)
    return true
  } catch (e) {
    return false
  }
}

export const localStorageService = isLocalStorageAvailable() ? window.localStorage : fakeLocalStorage
