'use strict';

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();
 
gulp.task('dev', function() {
 
  nodemon({
    script: 'main.js',
    watch: ['main.js', 'routes/**'],
    ext: 'js',
    env: { 'NODE_ENV': 'development', 'SIGN_SECRET': 'kingofnails' }
  })
 
  browserSync.init({
        proxy: 'localhost:8080',
        port: 3001
  });
 
  browserSync.watch([
    'partials/template.html',
    'static/css/**.*',
    'static/js/**.*',
  ]).on('change', browserSync.reload);

});