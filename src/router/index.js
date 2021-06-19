import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: 'login' */ '../views/Home.vue')
const Login = () => import(/* webpackChunkName: 'login' */ '../views/Login.vue')
const Reg = () => import(/* webpackChunkName: 'reg' */ '../views/Reg.vue')
const Forget = () => import(/* webpackChunkName: 'forget' */ '../views/Forgot.vue')
const Index = () => import(/* webpackChunkName: 'index' */ '../views/channels/index.vue')
const Center = () => import(/* webpackChunkName: 'center' */ '../views/Center.vue')
const Template1 = () => import(/* webpackChunkName: 'template1' */ '../views/channels/template1.vue')

const UserHome = () => import(/* webpackChunkName: 'home' */ '../views/User.vue')
const UserCenter = () => import(/* webpackChunkName: 'center' */ '../components/user/Center.vue')
const UserSetting = () => import(/* webpackChunkName: 'setting' */ '../components/user/Setting.vue')
const UserPost = () => import(/* webpackChunkName: 'post' */ '../components/user/Post.vue')
const UserMsg = () => import(/* webpackChunkName: 'msg' */ '../components/user/Msg.vue')
const UserOther = () => import(/* webpackChunkName: 'other' */ '../components/user/Other.vue')

const UserInfo = () => import(/* webpackChunkName: 'info' */ '../components/user/common/userinfo.vue')
const Password = () => import(/* webpackChunkName: 'password' */ '../components/user/common/password.vue')
const Photo = () => import(/* webpackChunkName: 'photo' */ '../components/user/common/photo.vue')
const Bind = () => import(/* webpackChunkName: 'bind' */ '../components/user/common/bind.vue')
Vue.use(Router)

export default new Router({
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
      path: '/home',
      name: 'home',
      component: UserHome,
    },
    {
      path: '/center',
      component: Center,
      linkActiveClass: 'layui-this',
      children: [
        {
          path: '',
          name: 'center',
          component: UserCenter,
        },

        {
          path: '/setting',
          name: 'setting',
          component: UserSetting,
          children: [
            {
              path: '',
              name: 'userinfo',
              component: UserInfo
            },
            {
              path: 'password',
              name: 'password',
              component: Password
            },
            {
              path: 'photo',
              name: 'photo',
              component: Photo
            },
            {
              path: 'bind',
              name: 'bind',
              component: Bind
            }
          ]
        },
        {
          path: '/post',
          name: 'post',
          component: UserPost,
        },
        {
          path: '/msg',
          name: 'msg',
          component: UserMsg,
        },
        {
          path: '/other',
          name: 'other',
          component: UserOther,
        },
      ]
    }
  ],
})
