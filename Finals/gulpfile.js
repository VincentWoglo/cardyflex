const { series, watch, parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');

function Sass() {
    return gulp.src('./wwwroot/scss/**/*.scss')
        .pipe(sass())
        .pipe(csso())
        .pipe(gulp.dest('./wwwroot/css'))
}

function WatchTask() {
    watch('./wwwroot/scss/**/*.scss',
        series(Sass))
}

exports.default = series(
    parallel(Sass),
    WatchTask
)