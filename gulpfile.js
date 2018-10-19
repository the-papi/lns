var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify-es').default,
    rename = require('gulp-rename'),
    browserify = require('gulp-browserify'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src(['resources/sass/**/*.scss'])
               .pipe(concat('bundle.min.css'))
               .pipe(sass())
               .pipe(gulp.dest('static/'))
});

gulp.task('js', function () {
    return gulp.src('resources/js/**/*.js')
               .pipe(concat('bundle.js'))
               .pipe(browserify())
               .pipe(uglify())
               .pipe(rename({suffix: '.min'}))
               .pipe(gulp.dest('static/'));
});

gulp.task('build', ['sass', 'js'])
