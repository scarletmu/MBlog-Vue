'use strict';
const router = require('koa-router')({prefix: '/info'});
const respBuild = require('../utils/respBuild');
const config = require('../config');

router.get('/initSlider', async function(ctx,next){
  try{
    let { Slider } = config;
    respBuild.buildSuccess(ctx, Slider);
  }catch(err){
    console.error(err);
    respBuild.buildError(ctx, err);
  }
});

module.exports = router;