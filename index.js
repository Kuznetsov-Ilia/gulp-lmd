var through = require('through2');
var gutil = require('gulp-util');
var log = gutil.log;
var LMD = require('lmd');

module.exports = function (path) {
  var stream = through.obj(function (file, enc, callback) {
    if (file.isNull()) {
      var lmd = new LMD(path);      
      var streamer = through();
      streamer.on('error', this.emit.bind(this, 'error'));
      lmd.pipe(streamer);
      lmd.log.pipe(process.stdout);

      file.contents = streamer;
      this.push(file);
      return callback();
    } else {
      log('only null, try `gulp.src("")`');
      this.push(file);
      return callback();
    }
  });

  return stream;
}
