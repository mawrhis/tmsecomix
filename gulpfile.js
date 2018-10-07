var gulp          = require('gulp'),
    runSequence   = require('run-sequence'),

    // bsync
    browserSync   = require('browser-sync'),

    //postcss
    postcss       = require('gulp-postcss'),
    autoprefixer  = require('gulp-autoprefixer'),
    cssnano       = require('cssnano'),

    //sass
    sass          = require('gulp-sass');


// Default task
gulp.task('default', function(){
    runSequence('clean', 'copy', function() {
        runSequence(config.tasks.default)
    })
});

gulp.task('prepare', function(){
  runSequence('clean', 'copy', function() {
    runSequence("styles")
  })
});

