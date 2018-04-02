module.exports = function () {
  $.gulp.task('html:dev', function() {
    return $.gulp.src('dev/html/**/*.html')
    .pipe($.plugin.htmlhint())
    .pipe($.plugin.htmlhint.failOnError())
    .on("error", $.plugin.notify.onError(function (error) {
        return "Achtung! \n" + $.stripAnsi(error.message);
      }))
    .pipe($.gulp.dest('build'))
    .pipe($.browserSync.reload({
      stream: true
    }));
  });

  $.gulp.task('html:build', function() {
    return $.gulp.src('dev/html/**/*.html')
    .pipe($.plugin.htmlmin({collapseWhitespace: true, preserveLineBreaks: true}))
    .pipe($.gulp.dest('build'));
  });
}



