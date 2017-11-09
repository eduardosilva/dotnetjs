var gulp = require('gulp'),
  concat = require('gulp-concat'),
  mocha = require('gulp-mocha');

gulp.task('tests', () =>
  gulp.src('./test/*.js', { read: false })
    .pipe(mocha({ reporter: 'spec' }))
);

gulp.task('combine', function () {
  return gulp.src('./src/*.js')
    .pipe(concat('dotnet.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['tests', 'combine']);