module.exports = {
  name: 'main modules',
  version: '0.1',
  root: 'src',
//  mixins: ['services.lmd.js', 'regions.lmd.js', 'pages.lmd.js', 'components.lmd.js', 'templates.lmd.js'],
  output: 'build/lmd.js',
  modules: {
    '<%= file %>': '*.js'
  },
  main: 'test',
  promise: '$.Deferred',

  match: true,
  shortcuts: false,
  ie: false,
  opera_mobile: false,
  optimize: true,
  lazy: false,
  parallel: true,
  pack: false,
  cache: false,
  log: true,
  warn: true,
  js: true,
  css: true,
  async: true,
  async_plainonly: true
}
