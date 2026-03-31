// NOTE if you wish to use .css (see README.md "styles")
// - remove customSyntax and use "npm stylelint:css"
// - remove 'value-keyword-case', particularly 'ignoreKeywords'

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-no-unsupported-browser-features',
  ],

  customSyntax: 'postcss-styled-components',
  ignoreFiles: [],
  rules: {
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'comment-empty-line-before': 'never',
    'declaration-empty-line-before': 'never',
    'media-feature-range-notation': 'prefix',
    'value-keyword-case': [
      'lower',
      {
        'ignoreKeywords': [
          '/^POSTCSS_styled-components_\\d+$/',
        ],
      },
    ],
  },
}
