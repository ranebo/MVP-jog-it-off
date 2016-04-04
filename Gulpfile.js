'use strict';

var gulp = require('gulp');
var sync = require('browser-sync');
var nodemon = require('gulp-nodemon');

var paths = {
  scripts: ['client/app/**/*.js'],
  html: ['client/app/**/*.html', 'client/index.html'],
  styles: ['client/styles/style.css']
};

gulp.task('start', ['serve'], function () {
  sync({
    notify: true,
    injectChanges: true,
    files: paths.scripts.concat(paths.html, paths.styles),
    proxy: 'localhost:8000'
  });
});

gulp.task('serve', function () {
  nodemon({
    script: './server/server.js',
    ignore: 'node_modules/**/*.js'
  });
});

gulp.task('default', ['start']);
