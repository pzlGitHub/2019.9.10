// 路由模块
import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/Msite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

// 声明使用插件
Vue.use(Router)

// 暴露出去路由接口
export default new Router({
  // 配置所有的路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      // 路由原信息
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      // 重定向
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login
    },
    // 商家产品路由
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        // 默认跳转的页面
        {
          path: '',
          // 重定向
          redirect: '/shop/goods'
        }
      ]
    }
  ]
})
