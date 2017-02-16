'use strict';
const Comment = require('../modules/comment');
const router = require('koa-router')({prefix: '/comment'});

router.post('/addComment', async function(ctx, next){
  try{
    let data = await Comment.add(ctx.request.body);
    ctx.body = data;
  }catch(err){
    ctx.status = 500;
    ctx.body = err;
  }
});

router.get('/getListByTopic',async function(req,res,next){
  try{
    let data = await Comment.getListByTopic(ctx.query['id']);
    ctx.body = data;
  }catch(err){
    ctx.status = 500;
    ctx.body = err;
  }
});

router.get('/getList', async function(req,res,next){
  try{
    let data = await Comment.add(ctx.query['page']);
    ctx.body = data;
  }catch(err){
    ctx.status = 500;
    ctx.body = err;
  }
});

module.exports = router;