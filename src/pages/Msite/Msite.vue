<template>
  <section class="msite">
    <!--首页头部组件-->
    <HeaderTop :title="address.name">
      <!-- 插槽 -->
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo._id ? '/userInfo' : '/login'">
        <span class="header_login_text" v-if="!userInfo._id">
          登录|注册
        </span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-shouji icon-geren2"></i>
        </span>
      </router-link>
    </HeaderTop>

    <!--首页导航 根据swiper官网 -->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper" v-if="categorys.length">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl + category.image_url" />
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <img src="./images/msite_back.svg" alt="back" v-else>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>

    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList />
    </div>
  </section>
</template>

<script>
// 映射函数  写进到页面内
import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/shopList/ShopList.vue'

export default {
  data () {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  // 生命周期 加载完后运行
  mounted () {
    // 发起请求数据
    this.$store.dispatch('getCategorys')
    this.$store.dispatch('getShops')
  },
  // 监视数据是否已经拿到
  watch: {
    categorys (value) { // categorys有了数据，是在异步更新界面之前执行
      // 使用setTimeout可以实现效果，但不是太好
      /* setTimeout(() => {
        // 创建一个Swiper实例对象，来实现轮播
        new Swiper('.swiper-container', {
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      }, 100); */

      // 希望界面更新就立即创建Swiper实例对象
      // 组件对象上的一个方法  更新数据之后，这语句立即执行，回掉函数在页面更新后执行
      this.$nextTick(() => { // 一旦完成页面更新，立即执行
        // 创建一个Swiper实例对象，来实现轮播
        new Swiper('.swiper-container', {
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  },
  // 计算属性
  computed: {
    ...mapState(['address', 'categorys', 'userInfo']),
    // 根据categorys一维数组 生成 categorysArr二维数组
    // 小数组中的元素最大数目是8
    // 创建两个数组，  遍历一维数组 存放到minarr数组内，长度为8的时候，创建新的一个minarr数组
    categorysArr () {
      const {categorys} = this
      // console.log(this);

      // 准备空的二维数组
      const arr = []
      // 准备一个小数组（最大长度为8）
      let minarr = []
      // 遍历categorys
      categorys.forEach(e => {
        // 如果当前小数组满了，创建一个新数组
        if (minarr.length === 8) {
          minarr = []
        }
        // 如果minarr是空的，将小数组保存到大数组中
        if (arr.length === 0) {
          arr.push(minarr)
        }
        // 将当前分类保存到小数组中
        minarr.push(e)
      })
      return arr
    }

  },
  components: {
    HeaderTop,
    ShopList
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'

.msite { // 首页
  width: 100%;
  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }

  .msite_shop_list {
    top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .shop_header {
      padding: 10px 10px 0;

      .shop_icon {
        margin-left: 5px;
        color: #999;
      }

      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>
