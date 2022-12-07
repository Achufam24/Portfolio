import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Skills from '../views/skills.vue'
import portfolio from '../views/portfolio.vue'
import contact from '../views/contact.vue'



const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
        path: '/skills',
        name: 'skills',
        component: Skills
      },
      {
        path: '/portfolio',
        name: 'portfolio',
        component: portfolio
      },
      {
        path: '/contact',
        name: 'contact',
        component: contact
      },

]


const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router