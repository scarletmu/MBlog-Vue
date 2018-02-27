'use strict';
const Category = require('../model/category');

exports.getList = function(){
  return Category.getList();
};

exports.addCategory = function(args){
  return Category.add(args);
};

exports.editCategory = function(id, args){
  return Category.update(id, args);
}