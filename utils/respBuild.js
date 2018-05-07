exports.buildNoAuth = function(ctx, errMsg){
  let res = {
    errCode: 'NOAUTH',
    errMsg
  };
  ctx.status = 403;
  ctx.body = res;
};

exports.buildError = function(ctx, errCtx = '服务错误'){
  let errMsg = '服务发生错误', errCode = 'SERVERERROR', status = 500;
  if(!errCtx instanceof Error){
    if(typeof errCtx === 'object'){
      errCode = errCtx.errCode;
      errMsg = errCtx.errMsg;
    }else if(typeof errCtx === 'string'){
      errMsg = errCtx;
    };
    status = 400;
  };
  let res = {
    errCode: errCode || 'SERVERERROR',
    errMsg
  };
  ctx.status = status;
  ctx.body = res;
};

exports.buildSuccess = function(ctx, result = '操作成功'){
  let res = {
    result: 0,
    data: result
  };
  ctx.status = 200;
  ctx.body = res;
};