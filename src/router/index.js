import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViewCourse from '../views/course/ViewCourse.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/courses',
      name:'CourseInventory',
      component: ()=>import('../views/course/CourseInventory.vue'),
    },
    {
      path: '/courses/:id',
      name: 'ViewCourse',
      component: ViewCourse,
      props: true
    },


    
  ]
})

export default router
