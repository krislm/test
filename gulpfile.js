/**
 * Created by Kris on 3/21/2016.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            index: "index.html"
        }
    });
    gulp.watch("app/assets/*png", ['copy-assets']);
    gulp.watch("app/styles/*.scss", ['sass']);
    gulp.watch(["app/*.html", "app/app.js"]).on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('app/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
    gulp.watch('app/**/*.scss', ['sass']);
});

gulp.task('copy-assets', function () {
    return gulp.src('app/assets/')
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['serve', 'copy-assets']);