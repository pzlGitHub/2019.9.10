<template>
    <div class="app">
        <!-- 路由组件 -->
        <router-view></router-view>
        <!-- 非路由组件 拿到路由原信息 -->
        <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
    name: 'app',
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