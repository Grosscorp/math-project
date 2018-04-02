module.exports = function () {
  $.gulp.task('sass:dev', function () {
    return $.gulp.src('dev/static/scss/style.scss')
    .pipe($.plugin.sourcemaps.init())
    .pipe($.plugin.sass().on('error', $.plugin.sass.logError))
    .on("error", $.plugin.notify.onError({
        message: "Error: <%= error.message %>",
        title: "Achtung!"
      }))
    .pipe($.plugin.autoprefixer({
      browsers: ['last 8 versions']
    }))
    .pipe($.plugin.uncss({
      html: ['dev/html/**/*html']
    }))
    .pipe($.plugin.sourcemaps.write())
    .pipe($.gulp.dest('build/static/css/'))
    .pipe($.browserSync.reload({
      stream: true
    }));
  });

  $.gulp.task('sass:build', function () {
    return $.gulp.src('dev/static/scss/style.scss')
    .pipe($.plugin.sass())
    .pipe($.plugin.autoprefixer({
      browsers: ['last 8 versions']
    }))
    .pipe($.plugin.uncss({
      html: ['dev/html/**/*html']
    }))
    .pipe($.plugin.csso())
    .pipe($.gulp.dest('build/static/css/'));
  });
}