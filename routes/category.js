'use strict';
const router = require('koa-router')({prefix: '/category'});
const Category = require('../modules/category');

router.get('/getList',async function(ctx, next){
  try{
    let data = await Category.getList();
    ctx.body = data;
  }catch(err){
    ctx.status = 500;
    ctx.body = err;
  }
});

module.exports = router;
