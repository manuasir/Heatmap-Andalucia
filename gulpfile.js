var gulp        = require('gulp'),
    watch       = require('gulp-watch'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename');

require('gulp-help')(gulp, {
    description: 'Ayuda'
});

gulp.task('compress', 'Concatena y uglyfica todos los javascripts de AngularJS en anoauthpp.min.js.', function() {
    gulp.src(['website/**/*.js'])
        .pipe(concat('all'))
        .pipe(rename({
            extname: ".min.js"
        }))
        .pipe(gulp.dest('public/dist'))

});


gulp.task('stream', 'Escucha cambios en controladores y librerias', function() {
    gulp.watch("website/**/*.js", ['compress']);
});

gulp.task('default', ['stream']);