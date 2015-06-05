var gutil = require('gulp-util');
var moment = require('moment');

function timestamp() {
	return moment().format('hh:mm:ss') + ':';
}

module.exports = {
	error: function(message) {
		gutil.log(timestamp(), gutil.colors.red(message));
	},

	success: function(message) {
		gutil.log(timestamp(), gutil.colors.green(message));
	},

	warning: function(message) {
		gutil.log(timestamp(), gutil.colors.yellow(message));
	},

	info: function(message) {
		gutil.log(timestamp(), gutil.colors.blue(message));
	},
};