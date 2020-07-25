//Importing external packages.
import Vue from 'vue';
import VueRouter from 'vue-router';

//Importing views.
import Home from '../views/home/Home.vue';
import About from '../views/about/About.vue';
import Projects from '../views/projects/Projects.vue';
import Research from '../views/research/Research.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/Research',
    name: 'Research',
    component: Research
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
