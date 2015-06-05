/**
 * Created by alexander on 19.05.15.
 */
'use strict';
var browserSync = require('browser-sync').create();

module.exports = function (gulp, plugins, config, utility, logger, notifier) {
  return function () {
    logger.info('Starting server...\nServing files from: ' + config.paths.build);

    browserSync.init({
      server: {
        baseDir: config.paths.source
      }
    });

    gulp.watch(config.files.src.styles, ['styles']);
    gulp.watch(config.files.dest.styles).on('change', function () {
      logger.info('reloading css...');
      browserSync.reload();
    });
    gulp.watch(config.files.src.html).on('change', function () {
      logger.info('reloading due to html file changes...');
      browserSync.reload();
    });
  };
};
