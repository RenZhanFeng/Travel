import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/Login'
import Index from '../components/Index'
import HelloWorld from '../components/HelloWorld'

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },{
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/index',
        name: 'Index',
        component: Index
    }]
})

export default router