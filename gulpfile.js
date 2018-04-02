'use strict';

global.$ = {
  gulp: require('gulp'),
  plugin: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  del: require('del'),
  stripAnsi: require('strip-ansi'),

  path: {
    tasks: require('./gulp/config/config.js')
  }
};

$.path.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel('html:dev','sass:dev','javascript-vendors','img:dev','svg','fonts'),
  $.gulp.parallel('javascript:dev'),
  $.gulp.parallel('watch','serve')
  )
);

$.gulp.task('build', $.gulp.series(
  'clean',
  $.gulp.parallel('html:build','sass:build','javascript:build','img:build','svg','fonts')
  )
);


