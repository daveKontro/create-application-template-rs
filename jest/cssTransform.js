// turning style imports into empty objects
// https://jestjs.io/docs/code-transformation

module.exports = {
  process() {
    return {
      code: 'module.exports = {}',
    }
  },
  getCacheKey() {
    return 'cssTransform'
  },
}
