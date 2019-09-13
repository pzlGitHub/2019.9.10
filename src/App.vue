<template>
    <div class="app">
        <!-- 路由组件 -->
        <router-view></router-view>
        <!-- 非路由组件 拿到路由原信息 -->
        <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
// 引入映射函数  读取出来
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  // 触发 请求获取数据的方法  actions.js
  mounted () {
    // 直接发送请求
    // this.$store.dispatch('gettAddress');
    // 调用声明的方法发送请求
    this.getAddress()
    // 获取用户信息自动登录  未能拿到接口数据
    // this.getUserInfo()
  },
  methods: {
    // 都在这个里面使用vuex的映射函数  得到计算属性gettAddress
    ...mapActions(['getAddress', 'getUserInfo'])

  },
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .app
        width: 100%
        height: 100%
        background: #f5f5f5
</style>
