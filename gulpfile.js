'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rigger = require('gulp-rigger');
var prefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-minify-css');
var browserSync = require('browser-sync');

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "EasyCode_Shop"
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('css', function () {
    return gulp.src('./src/css/**/*.css')
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function () {
    return gulp.src('./src/**/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
    // gulp.watch('./src/css/**/*.css', ['css']);
    gulp.watch('./src/**/*.html', ['html']);
});

gulp.task('default', ['webserver', 'watch']);
