/*
    通过mutation间接更新state的多个方法的对象
    vuex 的 actions 模块
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
} from './mutation-types'

import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopInfo,
  reqShopGoods,
  reqShopRatings
} from '../api'

export default {
  // 自己拿不到的数据，就异步从后台获取进行处理
  // 自己能拿到的数据，就同步进行处理

  // 异步获取地址
  async getAddress ({commit, state}) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    // console.log(geohash);
    // 拿到获取的数据
    const result = await reqAddress(geohash)
    // 提交一个mutation  到mutation.js文件内使用
    // 确定获取到数据的标识
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取食品分类数组
  async getCategorys ({commit}) {
    // 发送异步ajax请求
    // 拿到获取的数据
    const result = await reqCategorys()
    // 提交一个mutation  到mutation.js文件内使用
    // 确定获取到数据的标识
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  // 异步获取商家列表
  async getShops ({commit, state}) {
    // 发送异步ajax请求
    // 拿到获取的数据
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    // 提交一个mutation  到mutation.js文件内使用
    // 确定获取到数据的标识
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  // 同步记录用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  // 异步获取用户信息 自动登录
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    result.code = 0
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },

  // 异步登出
  async logout ({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },

  // 异步获取商家信息
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  // 异步获取商家信息
  async getShopRatings ({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
  // 异步获取商家信息
  async getShopGoods ({commit}) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
    }
  }
}
