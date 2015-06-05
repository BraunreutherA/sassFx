'use strict';

var notifier = require('node-notifier');
var path = require('path');

module.exports = {
  send: function (image, title, message) {
    notifier.notify({
      icon: path.join(__dirname, '/assets/', image),
      title: title,
      message: message
    })
  },

  error: function (title, message) {
    notifier.notify({
      icon: path.join(__dirname, '/assets/', 'error.png'),
      title: title,
      message: message
    })
  },

  success: function (title, message) {
    notifier.notify({
      icon: path.join(__dirname, '/assets/', 'succes.png'),
      title: title,
      message: message
    })
  },

  info: function (title, message) {
    notifier.notify({
      icon: path.join(__dirname, '/assets/', 'info.png'),
      title: title,
      message: message
    })
  },
}