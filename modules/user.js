'use strict';
const User = require('../model/user');
const Config = require('../config');
const crypto = require('crypto');
const Promise = require('bluebird');
const co = require('co');

exports.login = function(username,password){
  return User.findById(username).then((userInfo) => {
    if(userInfo){
      if(userInfo.password == md5(password)){
        userInfo = userInfo.toObject();
        delete userInfo.password;
        return userInfo;
      }else{
        return Promise.reject('Wrong Password');
      }
    }else{
      return Promise.reject('No Such User');
    }
  });
};

exports.init = function(){
  co(function* (){
    let list = yield User.find();
    if(list.length > 0){
      console.log('Aready have user');
      return;
    }
    let pwd = Config.defaultAdmin.password || 'admin',
     md5Pwd = md5(pwd);
    yield User.create({
      username: Config.defaultAdmin.username || 'admin',
      password: md5Pwd  
    });
    console.log('Create default admin success');
  }) 
  .catch((err) => {
    console.log('Error in init user');
    console.log(err);
  })
}

function md5(str) {
  var md5 = crypto.createHash('md5');
  return md5.update(str).digest('hex');
}
