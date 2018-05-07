'use strict';
const router = require('koa-router')({prefix: '/category'});
const Category = require('../modules/category');
const respBuild = require('../utils/respBuild');
const logger = require('../utils/logger');

router.get('/getList',async function(ctx, next){
  try{
    let data = await Category.getList();
    respBuild.buildSuccess(ctx, data);
  }catch(err){
    logger.err('category', 'getList', err);
    respBuild.buildError(ctx, err);
  }
});

module.exports = router;
