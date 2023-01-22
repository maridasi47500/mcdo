var gulp = require("gulp");
  const sass = require('gulp-sass')(require('sass'));
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');


var browserSync = require('browser-sync').create();
var paths = {
  sass: ['src/theme/variables.scss']
};
// Specific Task
gulp.task('js', function() {
    return gulp
    .src(["src/*.ts"])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
})
//gulp.task('default', ['sass']);
// Specific Task
gulp.task('sass', function() {
    return gulp
    .src(['src/**/*.scss'])
	   .pipe(minifyCss())
	    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('src/css'))
})
//gulp.task('watch', function() {
//  gulp.watch(paths.sass, ['sass']);
//});
//gulp.task('serve:before', ['default','watch']);
//gulp.task('run:before', ['default']);
// Run multiple tasks

