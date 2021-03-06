'use strict';
const Topic = require('../model/topic');
const Category = require('../model/category');
const upyun = require('../utils/upyun');
const Config = require('../config');
const logger = require('../utils/logger');

exports.addTopic = async function(args){
  if(!args.Thumbnail){
    if(args.Category){
      let categories = await Category.getSingle(args.Category), category = categories[0];
      let url = category.defaultThumb || Config.defaultThumb;
      args.Thumbnail = url;
      return Topic.addTopic(args);
    }else{
      args.Thumbnail = Config.defaultThumb;
      return Topic.addTopic(args);
    }
  }else{
    return Topic.addTopic(args);
  }
  return Promise.resolve();
};

exports.editTopic = function(id,args){
  return Topic.editTopic(id,args);
};

exports.getListByCategory = function(id,page){
  let select = {Category:id};
  let limit = {sort:{CreatedTime:-1},skip:(page-1) * 10,limit:10};
  return Topic.getList(select,limit)
};

exports.getList = async function (page){
  let top = await Topic.getList({Top: true}),
  rest = (page === 1? 10 - top.length : 10),
  limit = {skip:(page-1) * rest,limit: rest,sort:{CreatedTime:-1}},
  normal = await Topic.getList({Top: false}, limit),
  result = top.concat(normal);
  logger.error('test');
  return Promise.resolve(result);
};

exports.getDetail = async function(TopicId){
  try {
    let res = await Promise.all([
      Topic.getDetail(TopicId),
      Topic.addNum(TopicId,{ViewNum:1})
    ]);
    return res[0];
  } catch (error) {
    console.error(error); 
    return error;
  }
};

exports.deleteTopic = async function(id){
  try {
    let res = await Topic.delete(id); 
  } catch (error) {
    console.error(error); 
    return ;
  }
};

exports.getToken = function(){
  try {
    return upyun.getToken();
  } catch (error) {
    console.error(error);    
    throw error;
  }
}


