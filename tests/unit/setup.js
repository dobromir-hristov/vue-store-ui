import * as vueTestUtils from '@vue/test-utils'
import Vuex from 'vuex'
import _merge from 'lodash.merge'
import _cloneDeep from 'lodash.clonedeep'

import '../../src/globalComponents'

global._merge = _merge
global.testid = (value) => `[data-testid="${value}"]`
// https://vue-test-utils.vuejs.org/api/#mount
global.mount = vueTestUtils.mount

// https://vue-test-utils.vuejs.org/api/#shallowmount
global.shallowMount = vueTestUtils.shallowMount

// A helper for creating Vue component mocks
global.createComponentMocks = ({ store, router, style, mocks, stubs } = {}) => {
  // Use a local version of Vue, to avoid polluting the global
  // Vue and thereby affecting other tests.
  // https://vue-test-utils.vuejs.org/api/#createlocalvue
  const localVue = vueTestUtils.createLocalVue()
  const returnOptions = { localVue }

  // https://vue-test-utils.vuejs.org/api/options.html#stubs
  returnOptions.stubs = stubs || {}
  // https://vue-test-utils.vuejs.org/api/options.html#mocks
  returnOptions.mocks = mocks || {}

  // Converts a `store` option shaped like:
  //
  // store: {
  //   someModuleName: {
  //     state: { ... },
  //     getters: { ... },
  //     actions: { ... },
  //   },
  //   anotherModuleName: {
  //     getters: { ... },
  //   },
  // },
  //
  // to a store instance, with each module namespaced by
  // default, just like in our app.
  if (store) {
    localVue.use(Vuex)
    returnOptions.store = new Vuex.Store({
      modules: Object.keys(store)
        .map((moduleName) => {
          const storeModule = store[moduleName]
          return {
            [moduleName]: {
              state: storeModule.state || {},
              getters: storeModule.getters || {},
              actions: storeModule.actions || {},
              namespaced:
                typeof storeModule.namespaced === 'undefined'
                  ? true
                  : storeModule.namespaced
            }
          }
        })
        .reduce((moduleA, moduleB) => Object.assign({}, moduleA, moduleB), {})
    })
  }

  // If using `router: true`, we'll automatically stub out
  // components from Vue Router.
  if (router) {
    returnOptions.stubs['router-link'] = true
    returnOptions.stubs['router-view'] = true
  }

  // If a `style` object is provided, mock some styles.
  if (style) {
    returnOptions.mocks.$style = style
  }

  return returnOptions
}

global.createModuleStore = (vuexModule, options = {}) => {
  vueTestUtils.createLocalVue().use(Vuex)
  return new Vuex.Store({
    ..._cloneDeep(vuexModule)
  })
}
