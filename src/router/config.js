export default [{
  path: '/',
  meta: {
    title: 'index'
  },
  component: (resolve) => require(['@/views/index/index.vue'], resolve)
}, {
  path: '/about',
  meta: {
    title: 'about'
  },
  component: (resolve) => require(['@/views/about/about.vue'], resolve)
},
// {
//   path: '/myspace/infos',

//   meta: {
//     requireAuth: true,
//     title: 'myspace'
//   },
//   component: (resolve) => require(['@/views/mySpaceInfo.vue'], resolve)
// },
{
  path: '/login',
  meta: {
    requireAuth: false,
    title: 'login'
  },
  component: (resolve) => require(['@/views/login/login.vue'], resolve)
}]
