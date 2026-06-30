import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'galaxy',
      component: () => import('@/views/GalaxyIntentions.vue'),
    },
    {
      path: '/intention/:id',
      name: 'intention',
      component: () => import('@/views/IntentionPhase.vue'),
    },
    {
      path: '/intention/:id/refine',
      name: 'intention-refine',
      component: () => import('@/views/RefineIntention.vue'),
    },
    {
      path: '/intention/:id/strategies',
      name: 'intention-strategies',
      component: () => import('@/views/SelectStrategy.vue'),
    },
    {
      path: '/intention/:id/json',
      name: 'intention-json',
      component: () => import('@/views/JsonPreview.vue'),
    },
    {
      path: '/strategy/:id',
      name: 'strategy',
      component: () => import('@/views/GalacticFootballStrategy.vue'),
    },
    {
      path: '/sources',
      name: 'sources',
      component: () => import('@/views/SourcesMap.vue'),
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('@/views/HistoryEvolution.vue'),
    },
    {
      path: '/command-center',
      name: 'command-center',
      component: () => import('@/views/CommandCenter.vue'),
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: () => import('@/views/AlertsNotifications.vue'),
    },
  ],
})

export default router
