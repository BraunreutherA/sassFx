var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

var config = require('./gulp/config');
var utility = require('./gulp/utility');
var logger = require('./gulp/logger.js');
var notifier = require('./gulp/notifier.js');

/**
 * Replaces the gulp.src for a monkey patched version with gulp plumber.
 * @returns {*}
 */
var _gulpsrc = gulp.src;
gulp.src = function() {
  return _gulpsrc.apply(gulp, arguments)
    .pipe(plugins.plumber({
      errorHandler: function(err) {
        logger.error(err);
        this.emit('end');
      }
    }));
};

/**
 * Requires a task from the gulp tasks folder.
 * @param task
 * @returns {*}
 */
function getTask(task) {
  return require('./gulp/tasks/' + task)(gulp, plugins, config, utility, logger, notifier);
}

if(config.verboseMode) {
  logger.info('Specified configuration file:\n' + JSON.stringify(config, null, 2));
}

gulp.task('styles', getTask('styles'));
gulp.task('server', getTask('server'));


gulp.task('serve', function () {
  runSequence('styles', 'server');
});

/**
 * The help task lists all available tasks.
 */
var taskListing = require('gulp-task-listing');
gulp.task('help', taskListing);

/**
 * The default task is the help task - it shows all the available tasks in the build chain.
 */
gulp.task('default', ['help']);
