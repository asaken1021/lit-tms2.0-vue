import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Projects from '../views/Projects.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
