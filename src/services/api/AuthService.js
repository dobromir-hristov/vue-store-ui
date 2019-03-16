import { ApiService } from './ApiService'

const GET_USER_ENDPOINT = '/user'
const LOGIN_ENDPOINT = '/login'

export const AuthService = {
  /**
   * Fetches the user by the token
   * @param {string} token
   * @return {Promise}
   */
  async fetchUser (token) {
    await ApiService.get(GET_USER_ENDPOINT, { token })
    return { id: 'some_id', name: 'John Doe', email: 'john@doe.com' }
  },

  /**
   * Logs in the user
   * @param {{ email: string, password:string }} credentials
   * @return {Promise}
   */
  async loginUser (credentials) {
    await ApiService.post(LOGIN_ENDPOINT, credentials)
    return { token: 'some_fake_token' }
  }
}
