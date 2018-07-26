'use strict';

module.exports = () => {
  return async function(ctx, next) {
    console.log(222)
    await next();
    // 上报请求时间
    console.log(23333)
  };
};
