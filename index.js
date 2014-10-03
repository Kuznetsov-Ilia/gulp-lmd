const PLUGIN_NAME = 'gulp-lmd';
var through = require('through2');
var gutil = require('gulp-util');
var log = gutil.log;
var PluginError = gutil.PluginError;
var LMD = require('lmd');

module.exports = function (path) {
  var stream = through.obj(function (file, enc, callback) {
    if (file.isStream()) {
      var lmd = new LMD(path);      
      var streamer = through();
      streamer.on('error', this.emit.bind(this, 'error'));
      lmd.pipe(streamer);
      lmd.log.pipe(process.stdout);

      file.contents = file.contents.pipe(streamer);

      this.push(file);
      return callback();
    } else {
      log('only streams, try `gulp.src("conf.lmd.js", { buffer: false })`');
      this.push(file);
      return callback();
    }
  });

  return stream;
}
