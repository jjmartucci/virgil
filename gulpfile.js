var gulp = require('gulp');
var gutil = require("gulp-util");

var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var WebpackDevServer = require("webpack-dev-server");

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(1234, "localhost", function(err) {
            if(err) throw new gutil.PluginError("webpack-dev-server", err);
            // Server listening
            gutil.log("[webpack-dev-server]", "http://localhost:1234/webpack-dev-server/index.html");

            // keep the server alive or continue?
            // callback();
        });
});

gulp.task('virgil', ['webpack']);
gulp.task('virgil-server', ['webpack-dev-server']);