module.exports = function () {
  $.gulp.task('fonts', function() {
    return $.gulp.src('dev/static/fonts/**/*')
    .pipe($.gulp.dest('build/static/fonts/'))
    .pipe($.browserSync.reload({
      stream: true
    }));
  });
}