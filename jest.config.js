/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    rootDir: __dirname,
    roots: [
      '<rootDir>/src',
    ],
    automock: false,
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!**/node_modules/**',
      'src/**/*.d.ts',
    ],
    coverageDirectory: '<rootDir>/jest/coverage',
    coverageThreshold: undefined,
    displayName: 'UI',
    globals: {},
    maxConcurrency: 5, // 5 is default (see test.concurrent)
    moduleNameMapper: {
      '^.+\\.module\\.(css)$': 'identity-obj-proxy',
    },
    resetMocks: true,
    setupFiles: [
      '<rootDir>/jest/setup.js',
    ],
    setupFilesAfterEnv: [
      '<rootDir>/jest/setupTests.js',
    ],
    testMatch: [
      '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
    testEnvironment: 'jsdom',
    transform: {
      // https://babeljs.io/docs/config-files#jest
      '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
      '^.+\\.css$': '<rootDir>/jest/cssTransform.js',
      '^.+\\.svg$': '<rootDir>/jest/svgTransform.js',
      '^.+\\.woff2$': '<rootDir>/jest/fontTransform.js',
    },
    // transformIgnorePatterns: [
    //   '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    //   '^.+\\.module\\.(css|sass|scss)$',
    // ],
    verbose: true,
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname',
    ],
  }
}
