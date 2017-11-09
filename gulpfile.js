var gulp = require('gulp'),
	concat = require('gulp-concat');
 
gulp.task('default', function() {
  return gulp.src('./src/*.js')
    .pipe(concat('dotnet.js'))
    .pipe(gulp.dest('./dist/'));
});