import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import Projectview from "@/views/Projectview.vue"

const routes = [
  {
    path: '/',
    component: Home
    
  },
  {
    path:  '/Project/:Category/:index',
    component: Projectview
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
export default router