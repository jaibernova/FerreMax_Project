import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from '@/router.js';

Vue.config.productionTip = false
Vue.use(BootstrapVue);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
