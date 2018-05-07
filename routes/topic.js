'use strict';
const router = require('koa-router')({prefix: '/topic'});
const logger = require('../utils/logger');
const Topic = require('../modules/topic');
const respBuild = require('../utils/respBuild');

router.get('/getList', async function(ctx, next){
  try{
    let result = await Topic.getList(ctx.query['page']);
    respBuild.buildSuccess(ctx, result);
  }catch(err){
    logger.error('topic', 'getList', err);
    respBuild.buildError(ctx, err);
  }
});

router.get('/getTop', async function(ctx, next){
  try{
    let data = await Topic.getTop();
    respBuild.buildSuccess(ctx, data);
  }catch(err){
    logger.error('topic', 'getTop', err);
    respBuild.buildError(ctx, err);
  }
});

router.get('/getDetail',async function(ctx, next){
  try{
    let data = await Topic.getDetail(ctx.query['topicId']);
    respBuild.buildSuccess(ctx, data);
  }catch(err){
    logger.error('topic', 'getList', err);
    respBuild.buildError(ctx, err);
  }
});

router.get('/getListByCategory', async function(ctx,next){
  try{
    let data = await Topic.getListByCategory(ctx.query['id'], ctx.query['page']);
    respBuild.buildSuccess(ctx, data);
  }catch(err){
    logger.error('topic', 'getListByCategory', err);
    respBuild.buildError(ctx, err);
  }
});

module.exports = router;
