/**
 * Created by alexander on 19.05.15.
 */
'use strict';
var path = require('path');
var argv = require('yargs').argv;
var environment = process.env.NODE_ENV;
var bower = 'bower_components';

var logger = require('./logger');

var config = {
  verboseMode: argv.verbose,
  env: environment,
  isProduction: environment === 'production',
  isStage: environment === 'stage',
  stopOncompileError: false
};

function buildConfig(configFile) {
  var rootPath = path.join(__dirname, '../');
  var sourceFolder = path.join(rootPath, 'src/');
  var tempFolder = path.join(rootPath, '.tmp/');
  var buildFolder = path.join(rootPath, 'build/', configFile.buildFolder);
  var bowerFolder = path.join(rootPath, bower);

  config.paths = {
    root: rootPath,
    source: sourceFolder,
    temp: tempFolder,
    build: buildFolder,
    bower: bowerFolder,

    src: {
      html: path.join(sourceFolder)
    },

    dest: {
      styles: path.join(sourceFolder, 'css/'),
      html: path.join(buildFolder)
    }
  };

  config.files = {
    src: {
      sassfx: path.join(sourceFolder, 'scss/sassfx-test.scss'),
      styles: path.join(sourceFolder, 'scss/**/*.scss'),
      html: path.join(sourceFolder, '**/*.html')
    },
    dest: {
      html: path.join(buildFolder, '**/*.html'),
      styles: path.join(sourceFolder, 'css/**/*.css')
    }
  };
}

switch (environment) {
  case 'stage' :
    logger.info('Stage environment specified.. Loading stage configuration...');
    var stageConfig = require('./environments/stage.json');
    buildConfig(stageConfig);
    break;
  case 'production' :
    logger.info('Stage environment specified.. Loading stage configuration...');
    var productionConfig = require('./environments/production.json');
    buildConfig(productionConfig);
    break;
  default :
    logger.error('No valid build environment specified ("stage", "production").. Exiting the process...');
    process.exit(1);
    break;
}

module.exports = config;
