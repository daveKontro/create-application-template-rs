// turning font file imports into empty objects

module.exports = {
  process() {
    return {
      code: 'module.exports = {}',
    }
  },
  getCacheKey() {
    return 'fontTransform'
  },
}
