"use strict";

var gulp = require("gulp");
var del = require("del");
var server = require("browser-sync").create();

gulp.task("copy", function () {
  return gulp.src([
    "source/index.html",
    "source/css/*.css",
    "source/fonts/**",
    "source/img/**",
    "source/js/**",
    "source/*.ico"
  ], {
  base: "source"
  }
)
  .pipe(gulp.dest("build"))
});

gulp.task("del", function () {
  return del("build");
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("html", function () {
  return gulp.src("*.html")
  .pipe(gulp.dest("build"))
});

gulp.task("css", function () {
  return gulp.src("css/*.css")
  .pipe(gulp.dest("build"))
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  gulp.watch("js/*.js", gulp.series("refresh"));
});

gulp.task("build", gulp.series("del", "copy"));
gulp.task("start", gulp.series("build", "server"));
