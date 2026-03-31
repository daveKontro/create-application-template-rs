// NOTE npm module react-scripts' options where the starting point,
// comments marked with :rs: are paraphrased from react-scripts

module.exports = ({ BUNDLER_WITH_PROFILING }) => {
  const withProfiling = (BUNDLER_WITH_PROFILING)

  return {
    parse: {
      // :rs: want terser to parse ecma 8 code however, don't want it
      // to apply minification steps that turns valid ecma 5 code
      // into invalid ecma 5 code... this is also why compress and 
      // output only apply transformations that are ecma 5 safe
      // https://github.com/facebook/create-react-app/pull/4234
      ecma: 8,
    },
    compress: {
      ecma: 5,
      warnings: false,
      // :rs: disabled b/c of an issue with Uglify breaking seemingly valid code:
      // https://github.com/facebook/create-react-app/issues/2376
      // pending further investigation:
      // https://github.com/mishoo/UglifyJS2/issues/2011
      comparisons: false,
      // :rs: disabled because of an issue with Terser breaking valid code:
      // https://github.com/facebook/create-react-app/issues/5250
      // pending further investigation:
      // https://github.com/terser-js/terser/issues/120
      inline: 2,
    },
    mangle: {
      // to work around the Safari 10 loop iterator 
      // warning "Cannot declare a let variable twice"
      // (although, i think safari is kind of right)
      safari10: true,
    },
    // :rs: for profiling in devtools
    keep_classnames: withProfiling,
    keep_fnames: withProfiling,
    output: {
      ecma: 5,
      comments: false,
      // :rs: emoji and regex not minified properly using default
      // https://github.com/facebook/create-react-app/issues/2488
      ascii_only: true,
    },
  }
}
