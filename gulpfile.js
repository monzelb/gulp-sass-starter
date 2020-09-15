const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function style(){
    // 1. Where is my scss file?
    return gulp.src('./scss/**/*.scss')
    //2. pass that file to gulp compiler
    .pipe(sass())
    //3. Where do we save the file to?
    .pipe(gulp.dest('./css'))
}