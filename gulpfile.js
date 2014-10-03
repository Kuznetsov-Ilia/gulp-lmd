'use strict';

var gulp = require('gulp');
var gulpLmd = require('./index.js');
var rename = require('gulp-rename');

gulp.task('lmd', function () {
  return gulp.src('')
    .pipe(gulpLmd('test/app.lmd.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('test/build'))
});
