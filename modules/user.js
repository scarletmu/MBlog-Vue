'use strict';
const User = require('../model/user');
const Config = require('../config');
const crypto = require('crypto');

exports.login = function(username,password){
  return User.findById(username).then((userInfo) => {
    if(userInfo){
      if(userInfo.password == md5(password)){
        userInfo = userInfo.toObject();
        delete userInfo.password;
        return userInfo;
      }else{
        return Promise.reject({
          errMsg: '密码错误',
          errCode: 'PASSWORDERR'
        });
      }
    }else{
      return Promise.reject({
        errMsg: '不存在用户',
        errCode: 'USERNOTEXIST'
      });
    }
  });
};

exports.init = async function(){
    let list = await User.find();
    if(list.length > 0){
      console.log('Aready have user');
      return;
    }
    let pwd = Config.defaultAdmin.password || 'admin', md5Pwd = md5(pwd);
    await User.create({
      username: Config.defaultAdmin.username || 'admin',
      password: md5Pwd  
    });
    console.log('Create default admin success');
}

function md5(str) {
  var md5 = crypto.createHash('md5');
  return md5.update(str).digest('hex');
}
