// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import axios from 'axios';  // https://github.com/imcvampire/vue-axios
import VueAxios from 'vue-axios';

import 'common/style/index.scss';

import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

// let app = Vue.extend(App);
// let router = new Router();

const routes = [
  // {path: '/', component: goods},
  {path: '/goods', name: 'goods', component: goods},
  {path: '/ratings', name: 'ratings', component: ratings},
  {path: '/seller', name: 'seller', component: seller}
];
const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  linkActiveClass: 'active'
});
router.replace('goods');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
