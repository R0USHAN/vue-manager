'use strict';

module.exports = app => {
  const {
    router,
    controller,
  } = app;
//   router.get('/', controller.home.index);
  router.get('/login', controller.home.login);
  router.get('/user/login', controller.user.login);
  router.get('/user/index', controller.user.index);
};
