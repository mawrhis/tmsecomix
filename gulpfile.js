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


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

//default task
gulp.task('default', ['serve']);