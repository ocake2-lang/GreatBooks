import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import AnalysesView from '../views/AnalysesView.vue'
import AnalysisDetailView from '../views/AnalysisDetailView.vue'
import MasterpieceView from '../views/MasterpieceView.vue'
import SummaryView from '../views/SummaryView.vue'
import ReflectionView from '../views/ReflectionView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
    meta: { title: 'Student Profile' }
  },
  {
    path: '/analyses',
    name: 'Analyses',
    component: AnalysesView,
    meta: { title: 'Literary Analyses' }
  },
  {
    path: '/analyses/:id',
    name: 'AnalysisDetail',
    component: AnalysisDetailView,
    props: true,
    meta: { title: 'Close-Reading Analysis' }
  },
  {
    path: '/masterpiece',
    name: 'Masterpiece',
    component: MasterpieceView,
    meta: { title: 'My Favorite Masterpiece' }
  },
  {
    path: '/summary',
    name: 'Summary',
    component: SummaryView,
    meta: { title: 'What Literature Has Taught Me — Summary of Learning ' }
  },
  {
    path: '/reflection',
    name: 'Reflection',
    component: ReflectionView,
    meta: { title: 'Beyond the Pages: My Personal Reflection ' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory('/GreatBooks/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title
  }
})

export default router
