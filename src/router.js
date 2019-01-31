import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ContactForm from '@/components/ContactForm.vue'
import ContactItem from '@/components/ContactItem.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'add',
      component: ContactForm
    },
    {
      path: '/contact/:id',
      name: 'contact',
      component: ContactItem
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
