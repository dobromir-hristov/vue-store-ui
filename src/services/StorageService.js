import { localStorageService } from './LocalStorageService'

/**
 * Service to help work with LocalStorage or other persisting layer
 */
export const StorageService = {
  /**
   * Retrieves a value by its key
   * @param {string} key - key by which to fetch
   * @param {*} fallback
   * @return {*}
   */
  get: (key, fallback) => {
    try {
      let item = localStorageService.getItem(key)
      return item ? (window.JSON && window.JSON.parse(item)) : fallback
    } catch (err) {
      return fallback
    }
  },
  /**
   * Save a value by it's key
   * @param {string} key
   * @param {*} value
   * @return {*|void}
   */
  persist: (key, value) => localStorageService.setItem(key, window.JSON.stringify(value)),
  /**
   * Remove a value from storage by it' key
   * @param {string}key
   * @return {*|void}
   */
  forget: key => localStorageService.removeItem(key)
}
