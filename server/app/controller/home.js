'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const result = await this.app.mysql.insert('posts', { title: 'Hello World' });
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
    // this.ctx.header = {
    //     'Access-Control-Allow-Origin' : '*'
    // };
    // this.ctx.set({
    //     'Access-Control-Allow-Origin' : '*'
    // })
    this.ctx.body = {
      id: '23',
      name: 'jack',
      arr: [{
        name: 'kkk',
      }],
    };
  }
}

module.exports = HomeController;
