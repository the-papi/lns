var gulp = require('gulp'),
    concat = require('gulp-concat'),
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

gulp.task('build', gulp.parallel('sass', 'font-awesome'));
