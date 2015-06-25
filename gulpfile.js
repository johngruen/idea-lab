
var gulp = require('gulp'),
    //cache = require('gulp-cache'),
    //concat = require('gulp-concat'),
    //imagemin = require('gulp-imagemin'),
    //jshint = require('gulp-jshint'),
    //uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'); 
    minifycss = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass');
var mainBowerFiles = require('main-bower-files');

gulp.task('styles', function() {
  return sass('src/styles/main.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('public/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('public/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Gets bowered things and moves the main files to the vendor directory
gulp.task('bower', function() {
  return gulp.src(mainBowerFiles(/* options */), { base: 'components' })
    .pipe(gulp.dest('public/vendor'));
});

// Watch
gulp.task('watch', function() {
  // Watch  the various SCSS files
  gulp.watch('src/styles/**/*.scss', ['styles']);
  livereload({ start: true })
  livereload.listen();
  gulp.watch(['public/**','app/views/**']).on('change', livereload.changed);
});
