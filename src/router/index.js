import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Projects from '../views/Projects.vue'
import Project from '../views/Project.vue'
import LineLink from '../views/LineLink.vue'
import BootstrapVue from 'bootstrap-vue'
import VueC3 from "vue-c3";
import "c3/c3.min.css";

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueC3)

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
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: Project
  },
  {
    path: '/line_link',
    name: 'LineLink',
    component: LineLink
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
