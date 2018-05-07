'use strict';
const _ = require('lodash');
const upyun = require('../utils/upyun');
const router = require('koa-router')({prefix: '/admin'});
const Topic = require('../modules/topic');
const User = require('../modules/user');
const Category = require('../modules/category');
const respBuild = require('../utils/respBuild');
const log = require('../utils/logger');

router.post('/login',async function(ctx, next){
  let inputData = ctx.request.body['data'];
  try{
    let data = await User.login(inputData.username, inputData.password);
    ctx.session = _.assign(ctx.session, data);
    respBuild.buildSuccess(ctx, '登录成功');
  }catch(err){
    log.error('admin', 'login', err);
    respBuild.buildError(ctx, err);
  }
})

router.use(async function (ctx, next) {
  if (ctx.session.username) {
    await next();
  } else {
    respBuild.buildNoAuth(ctx, '没有权限');
  }
}); 

router.get('/checkLogin',async function(ctx, next){
  if(ctx.session.username){
    ctx.body = 'succcess';
  }else{
    respBuild.buildNoAuth(ctx, '尚未登录');
  }
});

router.post('/addTopic', async function(ctx, next){
  try{
    let body = ctx.request.body;
    let result = await Topic.addTopic(body);
    respBuild.buildSuccess(ctx, '添加文章成功');
  }catch(err){
    log.error('admin', 'addTopic', err);
    respBuild.buildError(ctx, '添加文章错误');
  }
});

router.post('/editTopic', async function(ctx, next){
  try{
    let body = ctx.request.body;
    let result = await Topic.editTopic(body.id, body.args);
    respBuild.buildSuccess(ctx, '编辑文章成功');
  }catch(err){
    log.error('admin', 'editTopic', err);
    respBuild.buildError(ctx, err);
  }
});

router.post('/deleteTopic', async function(ctx, next){
  try {
    let { id } = ctx.request.body;
    let res = await Topic.deleteTopic(id); 
    respBuild.buildSuccess(ctx, '删除文章成功');
  } catch (err) {
    log.error('admin', 'deleteTopic', err);
    respBuild.buildError(ctx, err); 
  }
});

router.post('/addCategory',async function(ctx, next){
  try{
    let body = ctx.request.body;
    let result = await Category.addCategory(body);
    respBuild.buildSuccess(ctx, '添加分类成功');
  }catch(err){
    log.error('admin', 'addCategory', err);
    respBuild.buildError(ctx, err);
  }
});

router.post('/editCategory',async function(ctx, next){
  try{
    let { id, args } = ctx.request.body;
    let result = await Category.editCategory(id, args);
    respBuild.buildSuccess(ctx, '编辑分类成功');
  }catch(err){
    log.error('admin', 'addCategory', err);
    respBuild.buildError(ctx, err);
  }
});

router.post('/getToken', async function(ctx, next){
  try {
    let res = await Topic.getToken();
    respBuild.buildSuccess(ctx, res);
  } catch (err) {
    respBuild.buildError(ctx, err);
  }
})

module.exports = router;
