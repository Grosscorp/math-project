module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('dev/html/**/*.html',$.gulp.series('html:dev'));
    $.gulp.watch('dev/static/scss/**/*.scss',$.gulp.series('sass:dev'));
    $.gulp.watch('dev/static/js/**/*.js',$.gulp.series('javascript:dev'));
    $.gulp.watch(['dev/static/img/content/**/*.{png,jpg,gif}','dev/static/img/general/**/*.{png,jpg,gif}'],$.gulp.series('img:dev'));
    $.gulp.watch('dev/static/img/svg/*',$.gulp.series('svg'));
    $.gulp.watch('dev/static/fonts/**/*',$.gulp.series('svg'));
  });
}