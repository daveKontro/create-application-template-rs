// make a browser-like environment

if (typeof window !== 'undefined') {
  require('whatwg-fetch')  // fetch() polyfill
}
