'use strict';
const router = require('koa-router')({prefix: '/topic'});
const logger = require('../utils/logger');
const Topic = require('../modules/topic');

router.get('/getList', async function(ctx, next){
  try{
    let result = await Topic.getList(ctx.query['page']);
    ctx.body = result;
  }catch(err){
    logger.error('Error in getList');
    logger.error(err);
    ctx.status = 500;
    ctx.body = err;
  }
});

router.get('/getTop', async function(ctx, next){
  try{
    let data = await Topic.getTop();
    ctx.body = data;
  }catch(err){
    logger.error('Error in getTop');
    logger.error(err);
    ctx.status = 500;
    ctx.body = err;
  }
});

router.get('/getDetail',async function(ctx, next){
  try{
    let data = await Topic.getDetail(ctx.query['topicId']);
    ctx.body = data;
  }catch(err){
    logger.error('Error in getDetail');
    logger.error(err);
    ctx.status = 500;
    ctx.body = err;
  }
});

router.get('/getListByCategory', async function(ctx,next){
  try{
    let data = await Topic.getListByCategory(ctx.query['id'], ctx.query['page']);
    ctx.body = data;
  }catch(err){
    logger.error('Error in getDetail');
    logger.error(err);
    ctx.status = 500;
    ctx.body = err;
  }
});


module.exports = router;
