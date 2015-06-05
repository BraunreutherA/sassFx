/**
 * Created by alexander on 14.05.15.
 */
'use strict';

module.exports = function (gulp, plugins, config, utility, logger, notifier) {
  return function () {
    logger.info('Compiling sass files to css and adding vendor prefixes.');
    gulp.src(config.files.src.sassfx)
      .pipe(plugins.if(config.isStage, plugins.sourcemaps.init()))
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer())
      .pipe(plugins.if(config.isStage, plugins.sourcemaps.write('./')))
      .pipe(plugins.if(config.isProduction, plugins.csso()))
      .pipe(gulp.dest(config.paths.dest.styles));
  };
};
