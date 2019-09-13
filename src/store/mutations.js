/*
    直接更新state的多个方法的对象  vuex 的 mutations 模块
*/
// 引入mutation-types.js文件中的声明好固定的变量
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

export default {
  // 改变state内的数据   第二个参数是包含转递数据的对象

  // 异步获取地址
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  // 异步获取食品分类数组
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  // 异步获取商家列表
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  // 存储用户信息
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  // 重置用户信息
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  }

}
