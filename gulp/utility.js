var logger = require('./logger');
var del = require('del');

module.exports = {
  /**
   * Delete all files in a given path
   * @param  {Array}   path - array of paths to delete
   * @param  {Function} done - callback when complete
   */
  clean: function (path, done) {
    logger.info('Cleaning: ' + (path));
    del(path, done);
  }
};
