var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify-es').default,
    rename = require('gulp-rename'),
    browserify = require('gulp-browserify'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src(['resources/sass/**/*.scss'])
               .pipe(concat('bundle.min.css'))
               .pipe(sass({outputStyle: 'compressed'}))
               .pipe(gulp.dest('static/'))
});

gulp.task('font-awesome', function () {
    return gulp.src([
        'node_modules/@fortawesome/fontawesome-free/**',
        '!node_modules/@fortawesome/fontawesome-free/**/*.map',
        '!node_modules/@fortawesome/fontawesome-free/.npmignore',
        '!node_modules/@fortawesome/fontawesome-free/*.txt',
        '!node_modules/@fortawesome/fontawesome-free/*.md',
        '!node_modules/@fortawesome/fontawesome-free/*.json'
    ]).pipe(gulp.dest('static/fonts/font-awesome'))
});

gulp.task('js', function () {
    return gulp.src('resources/js/**/*.js')
               .pipe(concat('bundle.js'))
               .pipe(browserify())
               .pipe(uglify())
               .pipe(rename({suffix: '.min'}))
               .pipe(gulp.dest('static/'));
});

gulp.task('build', ['sass', 'js', 'font-awesome'])
