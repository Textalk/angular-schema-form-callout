/* global require */

var gulp = require('gulp');

var templateCache = require('gulp-angular-templatecache');
var minifyHtml = require('gulp-minify-html');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var streamqueue = require('streamqueue');
var jscs = require('gulp-jscs');
var cssmin = require('gulp-cssmin');


gulp.task('minify', function() {
  var stream = streamqueue({objectMode: true});
  stream.queue(gulp.src('./src/*.js'));
  stream.queue(
              gulp.src('./src/*.html')
                  .pipe(minifyHtml({
                    empty: true,
                    spare: true,
                    quotes: true
                  }))
                  .pipe(templateCache({
                    module: 'schemaFormCallout',
                    root: 'directives/decorators/bootstrap/callout/'
                  }))
    );

  stream.done()
        .pipe(concat('bootstrap-callout.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));

});

gulp.task('non-minified-dist', function() {
  var stream = streamqueue({objectMode: true});
  stream.queue(gulp.src('./src/*.js'));
  stream.queue(
              gulp.src('./src/*.html')
                  .pipe(templateCache({
                    module: 'schemaFormCallout',
                    root: 'directives/decorators/bootstrap/callout/'
                  }))

    );

  stream.done()
        .pipe(concat('bootstrap-callout.js'))
        .pipe(gulp.dest('dist/'));

});

gulp.task('jscs', function() {
  gulp.src('./src/**/*.js')
      .pipe(jscs());
});

gulp.task('cssmin', function () {
  gulp.src('src/*.css')
      .pipe(cssmin())
      .pipe(concat('callout.min.css'))
      .pipe(gulp.dest('dist/'));
});

gulp.task('default', [
  'minify',
  'non-minified-dist',
  'cssmin',
  'jscs'
]);

gulp.task('watch', function() {
  gulp.watch('./src/**/*', ['default']);
});
