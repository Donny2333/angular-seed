/**
 * Created by Donny on 17/3/23.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('js', function () {
    return gulp.src(['./js/*/*.js', './js/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./lib/'));
});

// 静态服务器
gulp.task('serve', ['js'], function () {
        browserSync.init({
            server: {
                baseDir: "./"
            }
        });

        gulp.watch("tpls/*.html").on("change", ['reload']);
        gulp.watch("css/*.css").on("change", ['reload']);
        gulp.watch("js/**/*.js").on("change", ['js', 'reload']);
    }
);

gulp.task('reload', function () {
    browserSync.reload();
});

gulp.task('default', ['serve']);