import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home.vue'

import Quiz from '../pages/Quiz.vue'




export default new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/javascript',
            component: Javascript
        },
        {
            path: '/vuejs',
            component: Vuejs
        },
        {
            path: '/quiz',
            component: Quiz
        }
    ]
})



