import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Project from '/src/views/Project.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: true
  },
  {
    path: '/project',
    name: 'project',
    component: Project,
    props: true
  },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
