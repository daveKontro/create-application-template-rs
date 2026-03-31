const restrictedGlobals = require('confusing-browser-globals')

// NOTE use following to address: 'Parsing error: __classPrivateFieldGet(...).at is not a function error'
// '@typescript-eslint/eslint-plugin': '6.5.0',
// '@typescript-eslint/parser': '6.5.0',

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:eslint-plugin-compat/recommended',
  ],
  rules: {
    // 📜 @typescript-eslint
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'no-dupe-class-members': 'off',  // handled by .ts
    'no-undef': 'off',  // handled by .ts
    '@typescript-eslint/consistent-type-assertions': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-var': 'error',  // makes 'no-redeclare' irrelevant
    // 'no-redeclare': 'off',  // see above
    // '@typescript-eslint/no-redeclare': 'error',  // see above
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        'functions': true,
        'classes': true,
        'variables': true,
        'allowNamedExports': true,
        'enums': true,
        'typedefs': true,
        'ignoreTypeReferences': true,
      },
    ],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        'allowShortCircuit': true,
        'allowTernary': true,
        'allowTaggedTemplates': true,
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'ignoreRestSiblings': true,
      },
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // 📜 eslint
    'array-callback-return': 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'eqeqeq': ['error', 'always'],
    'new-parens': 'error',
    'no-caller': 'error',
    'no-cond-assign': ['error', 'except-parens'],
    'no-const-assign': 'error',
    'no-control-regex': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-implied-eval': 'error',
    'no-invalid-regexp': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': [
      'error',
      {
        'allowLoop': true,
        'allowSwitch': false,
      },
    ],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-mixed-operators': [
      'error',
      {
        'groups': [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        'allowSamePrecedence': false,
      },
    ],
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-negated-in-lhs': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-unreachable': 'error',
    'no-unused-labels': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': [
      'error',
      {
        'ignoreDestructuring': false,
        'ignoreImport': false,
        'ignoreExport': false,
      },
    ],
    'no-with': 'error',
    'no-whitespace-before-property': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'strict': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'no-restricted-properties': [
      'error',
      {
        'object': 'require',
        'property': 'ensure',
        'message': 'use import() instead',
      },
      {
        'object': 'System',
        'property': 'import',
        'message': 'use import() instead',
      },
    ],
    'getter-return': 'error',

    // 📜 eslint, some additional styles
    'array-element-newline': ['error', 'consistent'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      // 'functions': 'never'
    }],
    'semi': ['error', 'never'],
    'curly': ['error', 'multi-line'],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
      },
    ],
    'arrow-spacing': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'no-irregular-whitespace': ['error'],
    'eol-last': ['error', 'always'],
    'no-trailing-spaces': [
      'error',
      {
        'skipBlankLines': false,
        'ignoreComments': true,
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],

    // 📜 import
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-webpack-loader-syntax': 'error',

    // 📜 react
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/forbid-foreign-prop-types': [
      'error',
      {
        'allowInPropTypes': true,
      },
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
      'error',
      {
        'allowAllCaps': true,
        'ignore': [],
      },
    ],
    'react/no-danger-with-children': 'error',
    // Disabled because of undesirable warnings
    // 'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-typos': 'error',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'error',

    // 📜 react, some additional styles
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-newline': [
      'error',
      {
        'multiline': 'consistent',
        'singleline': 'consistent',
      },
    ],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-props-no-multi-spaces': 'error',

    // 📜 jsx-a11y
    'jsx-a11y/click-events-have-key-events': 'off',  // could cause accidental clicks
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        'aspects': ['noHref', 'invalidHref'],
      },
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': [
      'error',
      {
        'ignoreNonDOM': true,
      },
    ],
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-distracting-elements': 'error',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',

    // 📜 react-hooks
    'react-hooks/rules-of-hooks': 'error',

    // 'flowtype/define-flow-type': 'error',
    // 'flowtype/require-valid-file-annotation': 'error',
    // 'flowtype/use-flow-type': 'error',
  },
}
