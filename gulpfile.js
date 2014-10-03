'use strict';

var gulp = require('gulp');
var gulpLmd = require('./index.js');

gulp.task('lmd', function () {
  return gulp.src('test/app.lmd.js', { buffer: false })
    .pipe(gulpLmd('test/app.lmd.js'))
    .pipe(gulp.dest('test/build'))
});
