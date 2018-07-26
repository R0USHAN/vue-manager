'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = {
      id: '23',
      name: 'jack',
      arr: [{
        name: 'kkk',
      }],
    };
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
