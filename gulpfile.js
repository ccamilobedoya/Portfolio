// Thanks to https://github.com/superhighfives/harp-gulp-browsersync-boilerplate

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var harp        = require('harp');
var ghPages     = require('gulp-gh-pages');
var cp          = require('child_process');


/**
 * Serve the Harp Site from the src directory
 */
gulp.task('serve', function () {
  harp.server(__dirname, {
    port: 8888
  }, function () {
    browserSync({
      proxy: "localhost:8888",
      open: false,
      /* Hide the notification. It gets annoying */
      notify: {
        styles: ['opacity: 0', 'position: absolute']
      }
    });
    /**
     * Watch for scss changes, tell BrowserSync to refresh main.css
     */
    gulp.watch(["public/css/*.css", "public/css/*.sass", "public/css/*.scss", "public/css/*.less"], function () {
      reload("public/css/main.css", {stream: true});
    });
    /**
     * Watch for all other changes, reload the whole page
     */
    gulp.watch(["*.html", "*.ejs", "*.jade", "*.js", "*.json", "*.md","public/**/*.html", "public/**/*.ejs", "public/**/*.jade", "public/**/*.js", "public/**/*.json", "public/**/*.md"], function () {
      reload();
    });
  })
});

/**
 * Build the Harp Site
 */
gulp.task('build', function (done) {
  cp.exec('harp compile . dist', {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', ['build'], function () {
  gulp.src("./dist/**/*")
    .pipe(ghPages());
});

/**
 * Default task, running `gulp` will fire up the Harp site,
 * launch BrowserSync & watch files.
 */
gulp.task('default', ['serve']);
