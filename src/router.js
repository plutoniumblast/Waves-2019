import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Events from './views/Events.vue'
import Contact from './views/Contact.vue'
import Sponsors from './views/Sponsors.vue'
import Developers from './views/Developers.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/event',
      name: 'Events',
      component: Events
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      component: Contact
    },
    {
      path: '/sponsors',
      name: 'Sponsors',
      component: Sponsors
    },
    {
      path: '/developers',
      name: 'Developers',
      component: Sponsors
    },
    {
      path: '*',
      redirect: {
        name: 'Home'
      }
    }
  ]
})
