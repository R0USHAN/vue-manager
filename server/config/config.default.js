'use strict';
const path = require('path')

module.exports = appInfo => {
  const config = {};

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
//   config.middleware = [ 'time', 'time2' ];
  config.test = {
    key: appInfo.name + '_123456',
  };
  config.keys = appInfo.name + '_123456';

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '47.98.184.109',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'wzs123..',
      // 数据库名
      database: 'payment',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.static = {
      dir: path.join(appInfo.baseDir, 'app/public')
  }

  return config;
};

