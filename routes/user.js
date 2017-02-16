'use strict';
const router = require('koa-router')({prefix: '/user'});
const User = require('../modules/user');
const _ = require('lodash');

router.post('/login',async function(ctx, next){
  let inputData = ctx.request.body['data'];
  try{
    let data = await User.login(inputData.username, inputData.password);
    ctx.session = _.assign(ctx.session, data);
    ctx.body = 'success';
  }catch(err){
    console.log(err);
    ctx.status = 403;
    ctx.body = err;
  }
})

router.get('/checkLogin',async function(ctx, next){
  if(ctx.session.username){
    ctx.body = 'succcess';
  }else{
    ctx.status = 403;
  }
});

module.exports = router;
