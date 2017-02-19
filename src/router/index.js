import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home.vue'
import Quiz from '../pages/Quiz.vue'
import Cheatsheet from '../pages/Cheatsheet.vue'

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home,
      name: "home"
    },

    {
      path: '/quiz',
      component: Quiz,
      name: "quiz"
    },
    {
      path: '/cheatsheet',
      component: Cheatsheet,
      name: "cheatsheet"
    },


  ]
})



