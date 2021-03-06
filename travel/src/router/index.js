import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import City from '../pages/city/City'
import Detail from '../pages/detail/Detail'

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },{
        path: '/city',
        name: 'City',
        component: City
    },{
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    }],
    scrollBehavior () {
        return { x: 0, y: 0 }
    }//滚动行为，换页面是滚到最上面

});


export default router