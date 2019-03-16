/* State is a factory function so it does not pollute in tests */
import { basicSetter } from '../StoreUtils'
import { AuthService } from '../../services/api/AuthService'
import { StorageService } from '../../services/StorageService'

const IS_LOGGING_IN = 'IS_LOGGING_IN'
const IS_FETCHING_USER = 'IS_FETCHING_USER'

const SET_USER = 'SET_USER'
const SET_TOKEN = 'SET_TOKEN'

const state = () => ({
  // loaders
  loggingIn: false,
  fetchingUser: false,
  // state
  user: { id: null },
  token: StorageService.get('token')
})

const getters = {
  userToken: state => state.token,
  isLoggedIn: (state) => !!state.user.id,
  userId: state => state.user.id
}

const mutations = {
  // loading
  [IS_FETCHING_USER]: basicSetter('fetchingUser'),
  [IS_LOGGING_IN]: basicSetter('loggingIn'),
  // state
  [SET_USER]: basicSetter('user'),
  [SET_TOKEN]: basicSetter('token')
}

const actions = {
  async loginUser ({ state, commit, dispatch }, credentials) {
    commit(IS_LOGGING_IN, true)
    try {
      const token = await AuthService.loginUser(credentials)
      commit(SET_TOKEN, token)
      dispatch('fetchUser')
    } finally {
      commit(IS_LOGGING_IN, false)
    }
  },
  async fetchUser ({ state, commit }) {
    commit(IS_FETCHING_USER, true)
    try {
      const user = await AuthService.fetchUser(state.token)
      commit(SET_USER, user)
    } finally {
      // I am not catching the error so we can handle it where necessary
      commit(IS_FETCHING_USER, false)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
