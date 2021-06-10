import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: 'login' */ '../views/Home.vue')
const Login = () => import(/* webpackChunkName: 'login' */ '../views/Login.vue')
const Reg = () => import(/* webpackChunkName: 'reg' */ '../views/Reg.vue')
const Forget = () => import(/* webpackChunkName: 'forget' */ '../views/Forgot.vue')
const Index = () => import(/* webpackChunkName: 'index' */ '../views/channels/index.vue')
const Template1 = () => import(/* webpackChunkName: 'template1' */ '../views/channels/template1.vue')

Vue.use(Router)

export default new Router({
  linkExactActiveClass:'layui-this',
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
          component:Index
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
    }
  ],
})
