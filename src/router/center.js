const UserCenter = () => import(/* webpackChunkName: 'center' */ '../components/user/Center.vue')
const UserSetting = () => import(/* webpackChunkName: 'setting' */ '../components/user/Setting.vue')
const UserPost = () => import(/* webpackChunkName: 'post' */ '../components/user/Post.vue')
const UserMsg = () => import(/* webpackChunkName: 'msg' */ '../components/user/Msg.vue')
const UserOther = () => import(/* webpackChunkName: 'other' */ '../components/user/Other.vue')

const UserInfo = () => import(/* webpackChunkName: 'info' */ '../components/user/common/userinfo.vue')
const Password = () => import(/* webpackChunkName: 'password' */ '../components/user/common/password.vue')
const Photo = () => import(/* webpackChunkName: 'photo' */ '../components/user/common/photo.vue')
const Bind = () => import(/* webpackChunkName: 'bind' */ '../components/user/common/bind.vue')
const MyPost = () => import(/* webpackChunkName: 'bind' */ '../components/user/common/userpost.vue')
const UserCollection = () => import(/* webpackChunkName: 'bind' */ '../components/user/common/usercollection.vue')

export default [
  {
    path: '',
    name: 'center',
    meta: { requiresAuth: true },
    component: UserCenter,
  },

  {
    path: 'setting',
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
    path: 'post',
    name: 'post',
    component: UserPost,
    children: [
      {
        path: '',
        name: 'userpost',
        component: MyPost,
      },
      {
        path: 'usercollection',
        name: 'usercollection',
        component: UserCollection,
      }
    ]
  },
  {
    path: 'msg',
    name: 'msg',
    component: UserMsg,
  },
  {
    path: 'other',
    name: 'other',
    component: UserOther,
  },
]