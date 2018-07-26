import Vue from 'vue'
import router from './router'
// import store from './store'

// import 'Directives' // 指令
// import '@/permission' // permission control

// 引入组件库及其组件库样式
import 'normalize.css/normalize.css'
import Element from 'element-ui'
// 引入根组件
import '@/assets/styles/'
import App from './App'

Vue.use(Element, {
  size: 'medium'
})

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
