// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,

  rules: {
    'style/jsx-max-props-per-line': [1, { maximum: 1 }],
  },

})
