import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
<<<<<<< HEAD
import router from './Router';
import app from './plugins/app';

Vue.config.productionTip = false;

Vue.use(app);
=======
import router from './profileRouter';
import NowUiKit from './plugins/now-ui-kit';

Vue.config.productionTip = false;

Vue.use(NowUiKit);
>>>>>>> 1938553afd214f18f2f85c9e53b90d6e6f4aaa72

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
