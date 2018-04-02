module.exports = function () {
  $.gulp.task('svg', function () {
    return $.gulp.src('dev/static/img/svg/*.svg')
    .pipe($.plugin.svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe($.plugin.cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe($.plugin.replace('&gt;', '>'))
    .pipe($.plugin.svgSprite( { mode: {
      symbol: {
        dest: '.',
        sprite: 'sprite.svg'
      }
    }
  }))
    .pipe($.gulp.dest('build/static/img/svg'))
    .pipe($.browserSync.reload({
      stream: true
    }));
  });
}