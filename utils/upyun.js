'use strict';
const Config = require('../config');
const crypto = require('crypto');
const redis = require('../model/db/redis');

function MD5(value) {
  return crypto.createHash('md5').update(value).digest('hex');
}
function hmacsha1(secret, value) {
  return crypto.createHmac('sha1', secret).update(value, 'utf-8').digest().toString('base64');
}

function sign(operator, password, method, uri, date, policy=null, md5=null) {
    let elems = [];
    [method, uri, date, policy, md5].forEach(item => {
        if (item != null) { elems.push(item) };
    })
    let value = elems.join('&');
    let auth = hmacsha1(password, value);
    return `UPYUN ${operator}:${auth}`;
}

function genPolicy(obj){
  let str = JSON.stringify(obj);
  let b64 = new Buffer(str).toString('base64');
  return b64;
}

exports.getToken = async function(){
  let date = new Date().toGMTString(),
  { bucket, expiration, uri, operator, password, defaultSave } = Config.upyun;
  expiration = ~~(new Date() / 1000) + Config.upyun.expiration;
  let exist_sign = await redis.getAsync('Signature'), signature = null;
  let exist_policy = await redis.getAsync('Policy'), policy = null;
  if(exist_sign && exist_policy){
    signature = exist_sign;
    policy = exist_policy
  }else{
    policy = genPolicy({bucket, 'save-key': defaultSave, expiration, date});
    signature = sign(operator, MD5(password), 'POST', uri, date, policy);
    await redis.setexAsync('Signature', Config.upyun.expiration - 10, signature);
    await redis.setexAsync('Policy', Config.upyun.expiration - 10, policy);
  }
  return Promise.resolve({
    policy, signature
  })
}