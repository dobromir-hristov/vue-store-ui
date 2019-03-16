module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-closing-bracket-spacing': ['error', {
      'selfClosingTag': 'never'
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: ['src/**/*.spec.js', 'test/unit/**/*.spec.js', 'src/**/__mocks__/*'],
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
      },
      env: { 'jest': true },
      plugins: [
        'jest'
      ],
      rules: {
        'jest/no-disabled-tests': 0
      },
      globals: {
        _merge: false,
        testid: false,
        mount: false,
        shallowMount: false,
        shallowMountView: false,
        createComponentMocks: false,
        createModuleStore: false
      }
    }
  ]
}
