import VueRouter from 'vue-router'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/components/index')
    },
    {
      path: '/normal-single-page',
      component: () => import('@/components/NormalSinglePage')
    },
    {
      path: '/single-page-with-layout',
      component: () => import('@/components/SinglePageWithLayout')
    },
    {
      path: '/single-page-with-multi-scroll',
      component: () => import('@/components/SinglePageWithMultiScroll')
    },
    {
      path: '/single-page-with-complicated-case',
      component: () => import('@/components/SinglePageWithComplicatedCase')
    }
  ]
})
