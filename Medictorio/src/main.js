import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './Router';
import app from './plugins/app';

Vue.config.productionTip = false;

Vue.use(app);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
