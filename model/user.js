'use strict';
const User = require('./db/mongodb').UserModel;

exports.findById = function(username){
  return User.findOne({username:username}).exec();
};

exports.find = function(){
  return User.find().exec();
}

exports.create = function(obj){
  return User.create(obj);
};

exports.model = User;