/*
vuex最核心的管理状态对象store

*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  // 配置的状态
  state,
  actions,
  mutations,
  getters
})
