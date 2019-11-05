import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'
import router from './router'
import store from './store/index'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont/iconfont.css'
require('swiper/dist/css/swiper.css');

Vue.config.productionTip = false;

fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
