/**
 * Created by Kris on 3/21/2016.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('compress', function() {
	gulp.src('app/*.js')
		.pipe(minify({
			ext:{
				src:'-debug.js',
				min:'.js'
			},
			// exclude: ['tasks'],
			ignoreFiles: ['.combo.js', '-min.js']
		}))
		.pipe(gulp.dest('dist'))
});

gulp.task('js', function () {
	gulp.src(['app/app.js', 'app/**/*.js'])
		.pipe(concat('app.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
})

gulp.task('minify-css', function() {
	return gulp.src('app/styles/main.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist'));
});

gulp.task('serve-dist', function() {
	browserSync.init({
		server: {
			index: "dist/index.html"
		}
	});
});

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
        .pipe(gulp.dest('app/styles'))
        .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
    gulp.watch('app/**/*.scss', ['sass']);
});

gulp.task('copy-templates', function() {
	return gulp.src('app/views/*.html')
		.pipe(gulp.dest('dist/views'));
});

gulp.task('copy-assets', function () {
    return gulp.src('app/assets/')
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['serve', 'copy-assets']);
gulp.task('build', ['js', 'minify-css']);
gulp.task('servedist', ['serve-dist']);