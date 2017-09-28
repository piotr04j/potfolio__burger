'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.sass', ['sass']);
});



gulp.task('sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./sass/*.sass", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
     return gulp.src('./sass/**/*.sass')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
	    .pipe(sourcemaps.write())//.pipe(sourcemaps.write('../css'))
	    .pipe(gulp.dest('./css'))
		.pipe(sass())
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);