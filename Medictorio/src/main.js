import Vue from 'vue';
import App from './App.vue';
import router from './Router';
import app from './plugins/app';

Vue.config.productionTip = false;

Vue.use(app);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
