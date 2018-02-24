'use strict';
const upyun = require('../utils/upyun');
const router = require('koa-router')({prefix: '/admin'});
const Topic = require('../modules/topic');
const Category = require('../modules/category');

// router.use(async function (ctx, next) {
//   if (ctx.session.username) {
//     await next();
//   } else {
//     ctx.status = 403;
//     ctx.body = '无权访问';
//   }
// });

router.get('/getToken', async function(ctx, next){
  try{
    let data = await upyun.getToken
    ctx.body = data;
  }catch(err){
    ctx.status = 500; 
    ctx.body = err;
  }
});

router.post('/addTopic', async function(ctx, next){
  try{
    let body = ctx.request.body;
    let result = await Topic.addTopic(body);
    ctx.body = result;
  }catch(err){
    ctx.status = 500;
    ctx.body = err;
  }
});

router.post('/editTopic', async function(ctx, next){
  try{
    let body = ctx.request.body;
    let result = await Topic.editTopic(body.id, body.args);
    ctx.body = result;
  }catch(err){
    ctx.status = 500;
    ctx.body = err;
  }
});

router.post('/addCategory',async function(ctx, next){
  try{
    let body = ctx.request.body;
    let result = await Category.addCategory(body);
    ctx.body = result;
  }catch(err){
    ctx.status = 500;
    ctx.body = err;
  }
});

router.post('/getToken', async function(ctx, next){
  try {
    let res = await Topic.getToken();
    ctx.body = res;
  } catch (err) {
    console.error(err);
    ctx.status = 500;
    ctx.body = err;
  }
})

module.exports = router;
