import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import jwt from 'jsonwebtoken'
import moment from 'dayjs'

import CenterChildRouter from './center'
const Home = () => import(/* webpackChunkName: 'login' */ '../views/Home.vue')
const Login = () => import(/* webpackChunkName: 'login' */ '../views/Login.vue')
const Reg = () => import(/* webpackChunkName: 'reg' */ '../views/Reg.vue')
const Forget = () => import(/* webpackChunkName: 'forget' */ '../views/Forgot.vue')
const Index = () => import(/* webpackChunkName: 'index' */ '../views/channels/index.vue')
const Center = () => import(/* webpackChunkName: 'center' */ '../views/Center.vue')
const Template1 = () => import(/* webpackChunkName: 'template1' */ '../views/channels/template1.vue')
const UserHome = () => import(/* webpackChunkName: 'home' */ '../views/User.vue')
Vue.use(Router)
const notFound = () => import(/* webpackChunkName: 'notfound' */ '../views/404.vue')
const Confrim = () => import(/* webpackChunkName: 'confirm' */ '../views/Confirm.vue')
const Reset = () => import(/* webpackChunkName: 'reset' */ '../views/Reset.vue')
const Add = () => import(/* webpackChunkName: 'add' */ '../components/content/Add.vue')
const Edit = () => import(/* webpackChunkName: 'edit' */ '../components/content/Edit.vue')
const Detail = () => import(/* webpackChunkName: 'detail' */ '../components/content/Detail.vue')
Vue.use(Router)

const router = new Router({
  linkExactActiveClass: 'layui-this',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'index',
          component: Index
        },
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/index/:catalog',
          name: 'template1',
          component: Template1
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg,
      beforeEnter (to, from, next) {
        if (from.name === 'login') {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forget,
    },
    {
      path: '/home/:uid',
      props: true,
      name: 'home',
      component: UserHome,
    },
    {
      path: '/center',
      component: Center,
      linkActiveClass: 'layui-this',
      children: CenterChildRouter
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: Confrim,
    },
    {
      path: '/reset',
      name: 'reset',
      component: Reset,
    },
    {
      path: '/add',
      name: 'add',
      meta: { requiresAuth: true },
      component: Add,
    },
    {
      path: '/edit/:tid',
      props: true,
      name: 'edit',
      meta: { requiresAuth: true },
      component: Edit,
    },
    {
      path: '/detail/:tid',
      name: 'detail',
      // meta: { requiresAuth: true },
      component: Detail,
    },
    {
      path: "/404",
      component:notFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
})


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  if (token !== '' && token !== 'undefined' && token !== null) {
    const payload = jwt.decode(token)
    console.log('token isnot timeout : ', moment().isBefore(moment(payload.exp * 1000)));
    if (moment().isBefore(moment(payload.exp * 1000))) {
      store.commit('setUserInfo', userInfo)
      store.commit('setIsLogin', true)
      store.commit('setToken', token)
    } else {
      localStorage.clear()
    }
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const islogin = store.state.isLogin
    if (islogin) {
      next()
    } else {
      next('login')
    }
  } else {
    next()
  }

})

export default router