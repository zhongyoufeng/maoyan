import Vue from 'vue'
import Router from 'vue-router'

import Movie from '../pages/movie/Root'
import Cinema from '../pages/cinema/Root'
import Mine from '../pages/mine/Root'
import Search from '../pages/common/Search'
import CityList from '../pages/common/CityList'
import login from './../components/mine/login.vue'
import register from './../components/mine/register.vue'
import detailComponent from './../components/movie/detail.vue'
import cinemaDetail from './../components/cinema/cinemaDetail.vue'
import personinfo from '../pages/mine/personinfo.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/movie',
      component: Movie,
      children: [
        {
          path: 'search',
          component: Search,
          props: {
            type: ['cinema', 'movie']
          }
        }, {
          path: 'citylist',
          component: CityList
        }

      ]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detailComponent,
      props: true
    },
    {
      path: '/cinema',
      component: Cinema,
      children: [
        {
          path: 'search',
          component: Search,
          props: {
            type: ['cinema']
          }
        },
        {
          path: 'citylist',
          component: CityList
        }

      ]

    },
    {
      path: '/mine',
      component: Mine,
      redirect: { name: 'login' },
      children: [
        {
          path: 'login',
          name: 'login',
          component: login
        },
        {
          path: 'register',
          name: 'register',
          component: register

        }
      ]
    },
    {
      path: '/cinemaDetail',
      name: 'cinemaDetail',
      component: cinemaDetail

    },
    {
      path: '/personinfo',
      name: 'personinfo',
      component: personinfo

    },
    {
      path: '**',
      redirect: '/movie'
    }

  ]
})

router.beforeEach((to, from, next) => {
  if (to.path == '/personinfo' || to.path == '/buy') {

    // 判断是否登录了
    let token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/mine')
    }
  }else {
    next()
  }
})

export default router
