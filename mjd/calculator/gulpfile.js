var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var jasmine = require('gulp-jasmine');

gulp.task('default', ['lint', 'watch', 'jas']);

gulp.task('watch', function() {
  gulp.watch('./javascripts/**/*.js', ['lint']);
});

gulp.task('lint', function() {
  return gulp.src('./javascripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('jas', function(){
  gulp.src('spec/test.js')
    // gulp-jasmine works on filepaths so you can't have any plugins before it 
    .pipe(jasmine())
});


