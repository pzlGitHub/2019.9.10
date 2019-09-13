import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'
import router from './router/index'
import store from './store/index'

import './mock/mockServer' // 加载mockServer

// 注册全局组件的标签
Vue.component(Button.name, Button) // <mt-button>

Vue.config.devtools = true
new Vue({
  el: '#app',
  render: h => h(App),
  // 使用上路由 vue-router
  router,
  // 使用上vuex
  store
})
