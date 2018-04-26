module.exports = function () {
  $.gulp.task('javascript-vendors', function() {
    return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js'])
    .pipe($.plugin.concat('vendors.min.js'))
    .pipe($.gulp.dest('dev/static/js/'))
    .pipe($.browserSync.reload({
      stream: true
    }));
  });

  $.gulp.task('javascript:dev', function() {
    return $.gulp.src('dev/static/js/**/*.js')
    .pipe($.gulp.dest('build/static/js/'))
    .pipe($.browserSync.reload({
      stream: true
    }));
  });

  $.gulp.task('javascript:build', function() {
    return $.gulp.src('dev/static/js/**/*.js')
    .pipe($.plugin.uglify())
    .pipe($.gulp.dest('build/static/js/'));
  });
}
