// 路由模块
import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/Msite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'


// 声明使用插件
Vue.use(Router);

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
            redirect: '/msite',
        },
        {
            path: '/login',
            component: Login,
        },
    ]
})
