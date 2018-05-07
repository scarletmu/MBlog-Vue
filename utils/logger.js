'use strict';
const log4js = require('log4js');
const path = require('path');

log4js.configure({
  appenders: { mblog: { type: 'file', filename: 'logs/mblog.log' } },
  categories: { default: { appenders: ['mblog'], level: 'error' } }
});

const logger = log4js.getLogger();

exports.error = function(type, funcname, msg){
  logger.error(`${type}:${funcname}:${msg}`);
};