const routes = [
    {
      path: '/',
      name: 'MainPages',
      component: () => import('../pages/MainPages.vue')
    },
    {
      path: '/statistics',
      name: 'StatisticsPages',
      component: () => import('../pages/StatisticsPages.vue')
    },
    {
      path: '/game-page',
      name: 'GamePage',
      component: () => import('../pages/GamePage.vue')
    }
  ]

  export default routes