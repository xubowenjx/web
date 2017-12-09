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
{
  path: '/login',
  meta: {
    requireAuth: false,
    title: 'login'
  },
  component: (resolve) => require(['@/views/login/login.vue'], resolve)
}]
