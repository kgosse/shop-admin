import Vue from 'vue';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';

import '@/styles/index.scss';

import App from './App.vue'
// import Login from '@/views/login';
import router from './router';
import store from './store';

import '@/icons'; // icon


Vue.config.productionTip = false;

Vue.use(ElementUI, {locale});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
