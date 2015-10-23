var gulp = require("gulp");
var $ = require('gulp-load-plugins')();

var DEST = 'dist',
    DEST_JS = DEST  + '/js',
    DEST_VENDOR = DEST + '/vendor',
    VENDOR_FILES = 'node_modules/babel-core/browser-polyfill.js',
    HTML_FILES = 'src/index.html',
    JS_FILES = 'src/app.js';


gulp.task("default", function () {
  gulp.src(VENDOR_FILES)
    .pipe(gulp.dest(DEST_VENDOR));

  gulp.src(HTML_FILES)
    .pipe(gulp.dest(DEST));

  return gulp.src(JS_FILES)
    .pipe($.babel())
    .pipe(gulp.dest(DEST_JS));
});

gulp.task('serve', $.serve({
    root: [DEST],
    port: 8090
}));

gulp.task('watch', function() {
  $.livereload.listen(8090);
  gulp.watch([JS_FILES, HTML_FILES], ['default']);
});
