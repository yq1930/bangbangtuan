import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routers from './router/router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/fonts/iconfont.css';

Vue.use(VueRouter);
Vue.use(iView);

const RouterConfig = {
  routes: routers,
};

const router = new VueRouter(RouterConfig);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
