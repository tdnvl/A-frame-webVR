const gulp = require('gulp');
const { series } = require('gulp');
const browsersync = require('browser-sync').create();

// BrowserSync
function browserSync(done) {
    browsersync.init({
      server: {
        baseDir: "./"
      }
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

// Watch files
function watchFiles() {
    gulp.watch("./css/*", browserSyncReload);
    gulp.watch("./**/*.html", browserSyncReload);
  }

// default task
gulp.task("default", gulp.parallel(browserSync));

// dev task
gulp.task("dev", gulp.parallel(watchFiles,browserSync));

// exports.default = series(watchFiles,browserSync);
