'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const result = await this.app.mysql.get('test', { math: 'Hello Worldaa' });
    if (result) {
      this.ctx.body = result;
    } else {
      this.ctx.body = {
        id: '23',
        name: 'jack',
        arr: [{
          name: 'kkk',
        }],
      };
    }
  }

  async login() {
    const result = await this.app.mysql.query('select * from test')
    if (result) {
        this.ctx.body = result;
    } else {
        this.ctx.body = {
            id: '23',
            name: 'jack',
            arr: [{
            name: 'kkk',
            }],
        };
    }
  }
}

module.exports = HomeController;
